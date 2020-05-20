# Email newsletter template project

While researching ways to create email newsletters, I discoverd a gap not supported by the tools I looked at. The gap was around making newsletters publishable to the web in a SEO friendly way. All the content produced in newslettes can not only help with SEO, but it could help attract new hires and provide people with useful information about the company.

This tool focuses on single static pages only.

## Initial Goals:

-   Create a data driven component library that can output HTML for web and/or Email.
-   Provide a basic framework that supports responsiveness and themes.
-   Create a system that abstracts away having to manage inline and stylesheets styles.
-   Bury the email tricks and hacks at lower levels to make developing easier and more efficient.
-   100% data driven. At some point, I should be able to pass a JSON doc and a web page and/or email template would return.

## Long Term Goals:

-   Create a UI experience for adding and editing content.
-   Publishing and bulk Email support
-   Page Directory

## Non Goals

-   Not for building entire websites or apps.

## OLD ----------------------

## Why email + web Newsletters?

-   Great SEO opportuntiy
-   Let potential employees learn more about the company

## Problems with creating email templates

-   Requires lots of HTML and CSS compared to web
-   100's of email clients that render things differently
-   Typically built for email only
-   lots of "tricks" and hacks to make emails render correctly.

## Solution

-   Make it easier to develop email templates
-   Create a scalable system that can evolve
-   Allow emails to be used as web page

## Unique Features

-   Syncs document stylesheets with component inline styles.
-   100% customizable
-   Works on web and in emails

## Features

-   Works as an email template and Web Page
-   Responsive
-   Supports Themes
-   Css, Inline Styles, and Styleable Properties are synced to ensure backward Compatablility
-   Supports Pseudo elements
-   Responsive
-   Data driven so no inline text.
-   100% static page with no JS

## Extended ideas

-   Create a UI that allows for data entry
-   Connect with contacts API
-   Use nodejs to send emails https://nodemailer.com/smtp/
-   Allow components to be email only. These will only render in email, not on web.

## ToDO

-   Web should turn off inline styles
-   Allow element substitution for websites to optimize for SEO
