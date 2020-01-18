FROM nginx

ENV RUBY_MAJOR 2.6
ENV RUBY_VERSION 2.6.3
ENV RUBY_DOWNLOAD_SHA256 11a83f85c03d3f0fc9b8a9b6cad1b2674f26c5aaa43ba858d4b0fcc2b54171e1
ENV BUILDDEPS bison dpkg-dev libgdbm-dev wget autoconf automake bzip2 dpkg-dev file g++ gcc imagemagick libbz2-dev libc6-dev libcurl4-openssl-dev libdb-dev libevent-dev libffi-dev libgdbm-dev libgeoip-dev libglib2.0-dev libjpeg-dev libkrb5-dev liblzma-dev libmagickcore-dev libmagickwand-dev libncurses5-dev libncursesw5-dev libpng-dev libpq-dev libreadline-dev libsqlite3-dev libssl-dev libtool libwebp-dev libxml2-dev libxslt-dev libyaml-dev make nodejs patch unzip xz-utils zlib1g-dev ca-certificates apt-utils


#########
# Stu (11/02/19): Merged buildpack-deps and ruby runtime dockerfile
########

# skip installing gem documentation
RUN mkdir -p /usr/local/etc \
	&& { \
		echo 'install: --no-document'; \
		echo 'update: --no-document'; \
	} >> /usr/local/etc/gemrc

RUN set -ex \
	\
	&& apt-get update \
	&& apt-get install -y --no-install-recommends $BUILDDEPS \
	&& rm -rf /var/lib/apt/lists/* \
	\
	&& wget -O ruby.tar.xz "https://cache.ruby-lang.org/pub/ruby/${RUBY_MAJOR%-rc}/ruby-$RUBY_VERSION.tar.xz" \
	&& echo "$RUBY_DOWNLOAD_SHA256 *ruby.tar.xz" | sha256sum -c - \
	\
	&& mkdir -p /usr/src/ruby \
	&& tar -xJf ruby.tar.xz -C /usr/src/ruby --strip-components=1 \
	&& rm ruby.tar.xz \
	\
	&& cd /usr/src/ruby \
	\
# hack in "ENABLE_PATH_CHECK" disabling to suppress:
#   warning: Insecure world writable dir
	&& { \
		echo '#define ENABLE_PATH_CHECK 0'; \
		echo; \
		cat file.c; \
	} > file.c.new \
	&& mv file.c.new file.c \
	\
	&& autoconf \
	&& gnuArch="$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)" \
	&& ./configure \
		--build="$gnuArch" \
		--disable-install-doc \
		--enable-shared \
	&& make -j "$(nproc)" \
	&& make install \
        && ruby --version && gem --version && bundle --version

# install things globally, for great justice
# and don't create ".bundle" in all our apps
ENV GEM_HOME /usr/local/bundle
ENV BUNDLE_PATH="$GEM_HOME" \
	BUNDLE_SILENCE_ROOT_WARNING=1 \
	BUNDLE_APP_CONFIG="$GEM_HOME"
# path recommendation: https://github.com/bundler/bundler/pull/6469#issuecomment-383235438
ENV PATH $GEM_HOME/bin:$BUNDLE_PATH/gems/bin:$PATH
# adjust permissions of a few directories for running "gem install" as an arbitrary user
RUN mkdir -p "$GEM_HOME" && chmod 777 "$GEM_HOME"
# (BUNDLE_PATH = GEM_HOME, no need to mkdir/chown both)

##############
# Now we do standards specific build
##############

# Now get into baseline directory
WORKDIR /opt/standards

# Transfer the sphinx over
COPY slate /opt/standards

# Upgrade bundler
RUN gem install bundler

# Figure out requirements
RUN bundle install

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections
RUN apt-get update
# Workaround for install bug
RUN mkdir -p /usr/share/man/man1
RUN apt-get install -y --no-install-recommends default-jre-headless npm

RUN mkdir ~/swagger-codegen ~/openapi-codegen

RUN wget --no-check-certificate https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.7/swagger-codegen-cli-2.4.7.jar -O ~/swagger-codegen/swagger-codegen-cli.jar
RUN wget --no-check-certificate https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/3.3.4/openapi-generator-cli-3.3.4.jar -O ~/openapi-codegen/openapi-generator-cli.jar

COPY swagger-gen/ swagger-gen/
COPY slate/ slate/
COPY docs/ docs/
COPY build.sh /opt/standards

RUN npm install --prefix ./swagger-gen/widdershins-cdr

RUN ./build.sh

# Build standards static output
# RUN bundle exec middleman build --clean

# Transfer files over (delete first)
RUN rm -fr /usr/share/nginx/html

# Now copy
RUN cp -R docs/ /usr/share/nginx/html
