# Amazon Subscribe & Save One-Click Cancel Tamper Monkey Script

Easy way to cancel Amazon Subscribe & Save subscriptions with just one button click.

Forked from [longzheng/chrome-subscribe-save-oneclick-cancel](https://github.com/longzheng/chrome-subscribe-save-oneclick-cancel) and converted
to a tampermonkey script.

![Explanation image](https://github.com/longzheng/chrome-subscribe-save-oneclick-cancel/assets/484912/aca44179-f7b8-4fa2-b2ed-3c4770ff82fd)

-   Supports Amazon.com, Amazon.ca, Amazon.co.uk, Amazon.de, Amazon.fr, Amazon.it, Amazon.es, Amazon.co.jp, Amazon.in, and Amazon.com.au (additional country URL need to be added to `manifest.json`)
-   Adds "One-click cancel" button to each subscription
-   Adds "One-click cancel all" to each delivery schedule
-   Adds "One-click cancel all" to all subscriptions
-   Automatically clicks through the subscription dialog to cancel
-   After cancellation, redirects users back to the "Deliveries" tab to cancel more subscriptions

### Install locally

1. Build the project with `npm install` and `npm run build` (or `pnpm` which I use)
1. Output script file is in `dist/` just paste that into tampermonkey script
