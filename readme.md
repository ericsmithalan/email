# Email template (unstable)


### Motivation

While researching ways to create email newsletters, I discoverd a gap not supported by the tools I looked at. The gap was around making newsletters publishable to the web in a SEO friendly way. All the content produced in newslettes can not only help with SEO, but it could help attract new hires and provide people with useful information about the company.


##### Startup
```
yarn start
```
---

#### Features


##### Referenced Styles
Properties and Theme are passed in and can be referenced inside the style method

```
const styles = style({
    ascTable: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

```
##### Inline Styles
Defaultprops and Props are passed to the parser and returned to include all the styles.
```

const Table: FC<TableElement> = (props: TableElement) => {
    const { ascTable } = useClassNames(styles);
    Table.defaultProps = {
        width: 800,
        className: ascTable,
        cellPadding: 0,
        cellSpacing: 0,
        border: 0
    };

    const mergedProps = useStyle2<TableElement>(styles, props, Table.defaultProps);

    return (
        <table role="presentation" {...(mergedProps as TableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};
```
##### Element Style Output
```
<table class="asc-table" cellpadding="0" cellspacing="0" border="0" align="center" 
    style="font-family: Barlow, sans-serif; 
    font-size: 15px; color:#2C2C2C; 
    font-weight: 400; border: 0px; width: 800px;">...
```

### Responsive & Pseudo
Element styles are stored as @default, @tablet, or @phone. Each represents a stylesheet that renders in the head.  

Below shows how to specify where a style gets stored

```
const styles = style({
    ctlSignature: {
        color: (p: Prop) => p.t.colors.darkFontColor,
        "@tablet":{
            fontSize: 16
        },
        "@phone":{
            fontSize: 13
        }
        ":hover":{
            fontSize: 13
        }
    },
    ctlLink: {
       ...

```

---


##### Initial Goals:

-   Create a data driven component library that can output HTML for web and/or Email.
-   Provide a basic framework that supports responsiveness and themes.
-   Create a system that abstracts away having to manage inline and stylesheets styles.
-   Bury the email tricks and hacks at lower levels to make developing easier and more efficient.
-   100% data driven. At some point, I should be able to pass a JSON doc and a web page and/or email template would return.

##### Non Goal

-   Not for building entire websites or apps.
