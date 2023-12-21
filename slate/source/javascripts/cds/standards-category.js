// Set Standards category ribbon and update analytics site
// https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/332
// https://github.com/ConsumerDataStandardsAustralia/standards-staging/issues/334
(function () {
    var locHostname = document.location.hostname;
    var locPathname = document.location.pathname;
    var docScripts = document.scripts;
    var settings = {};
    var lp;
    var fathomScript;
    var fathomStagingSiteId = 'KTYHJBYJ';
    var fathomNonProdSiteId = 'UEFFSKGJ';

    function onDOMContentLoaded(func) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                func();
            });
        } else {
            func();
        }
    }

    // Check category
    settings.standardsGitHub = locHostname === 'consumerdatastandardsaustralia.github.io';
    settings.experimental = locPathname.indexOf('/standards-experimental/') > -1;
    settings.draft = locPathname.indexOf('/includes/additional/drafts/') > -1;
    settings.candidate = locPathname.indexOf('/includes/additional/candidates/') > -1;
    settings.obsolete = locPathname.indexOf('/includes/obsolete/') > -1;
    settings.archived = locPathname.indexOf('/standards-archives/') > -1;
    settings.staging = locPathname.indexOf('/standards-staging/') > -1;

    // Testing
    //console.log(JSON.stringify(settings, null, 4));

    // Set Standards category and archive ribbon
    function setCssForCategories() {
        var cdsLogoElem = document.querySelector('body > div.toc-wrapper > img.logo');
        var cdsCategoryElem = document.createElement('p');
        cdsCategoryElem.id = 'cdsCategoryMessage';
        cdsCategoryElem.style.cssText = 'font-size: 16px; padding: 10px; margin: 2px 0 16px 0; background-color: #b60000; color: white;';

        // Pages
        if (settings.draft) {
            cdsCategoryElem.textContent = 'Draft';
        }
        if (settings.candidate) {
            cdsCategoryElem.textContent = 'Candidate';
        }
        if (settings.obsolete) {
            cdsCategoryElem.textContent = 'Superseded version';
        }

        // All pages in these collections will have a common label
        if (settings.archived) {
            cdsCategoryElem.textContent = 'Archived version';
        }
        if (settings.staging) {
            cdsCategoryElem.textContent = 'Staging';
        }

        // Add ribbon
        if (cdsLogoElem && cdsCategoryElem.textContent && !document.getElementById('cdsCategoryMessage')) {
            cdsLogoElem.parentNode.insertBefore(cdsCategoryElem, cdsLogoElem.nextSibling);
        }
    }
    onDOMContentLoaded(setCssForCategories);

    // Switch Fathom tracking
    for (lp = 0; lp < docScripts.length; lp += 1) {
        if (docScripts[lp].src.indexOf('cdn.usefathom.com/script.js') > -1) {
            fathomScript = docScripts[lp];
            break;
        }
    }
    if (fathomScript) {
        if (settings.staging) {
            fathomScript.setAttribute('data-site', fathomStagingSiteId);
        }
        if (!settings.standardsGitHub) {
            fathomScript.setAttribute('data-site', fathomNonProdSiteId);
        }
    }
}
    ());
