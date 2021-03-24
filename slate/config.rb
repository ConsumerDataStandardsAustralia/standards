# Unique header generation
require './lib/unique_head.rb'

# Markdown
set :markdown_engine, :redcarpet
set :markdown,
    fenced_code_blocks: true,
    smartypants: true,
    disable_indented_code_blocks: true,
    prettify: true,
    strikethrough: true,
    tables: true,
    with_toc_data: true,
    no_intra_emphasis: true,
    renderer: UniqueHeadCounter

# Alternative layouts
# For pages that don't include code snippets/ examples, remove the code panel so the main content has wider display real estate
page "/includes/releasenotes/*", :layout => "no_code_panel_layout"

# Assets
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :build_dir, '../docs'

# Activate the syntax highlighter
activate :syntax
ready do
  require './lib/multilang.rb'
end

activate :sprockets

activate :autoprefixer do |config|
  config.browsers = ['last 2 version', 'Firefox ESR']
  config.cascade  = false
  config.inline   = true
end

# Github pages require relative links
activate :relative_assets
set :relative_links, true

# Build Configuration
configure :build do
  # If you're having trouble with Middleman hanging, commenting
  # out the following two lines has been known to help
  activate :minify_css
  activate :minify_javascript
  # activate :relative_assets
  # activate :asset_hash
  # activate :gzip
end

# Deploy Configuration
# If you want Middleman to listen on a different port, you can set that below
set :port, 4567
activate :livereload

helpers do
  require './lib/toc_data.rb'
end
