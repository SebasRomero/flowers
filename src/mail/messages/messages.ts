import { IInfoContactForm } from 'src/contact/dto/info-contact.dto';
import { IInfoBooking } from 'src/booking/dto/info-booking.dto';

export function htmlMessageForm(infoForm: IInfoBooking) {
  return `
  <!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <title></title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            #outlook a {
                padding: 0;
            }

            body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }

            table,td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
            }

            p {
                display: block;
                margin: 0;
            }
        </style>
        <!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
        <!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Inter:700,400,600,500" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style type="text/css">
            @media only screen and (min-width: 599px) {
                .h {
                    width:536px!important;
                    max-width: 536px;
                }

                .m {
                    width: 568px!important;
                    max-width: 568px;
                }
            }
        </style>
        <style media="screen and (min-width:599px)">
            .moz-text-html .h {
                width: 536px!important;
                max-width: 536px;
            }

            .moz-text-html .m {
                width: 568px!important;
                max-width: 568px;
            }
        </style>
        <style type="text/css">
            u+.emailify .g-screen {
                background: #000;
                mix-blend-mode: screen;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            u+.emailify .g-diff {
                background: #000;
                mix-blend-mode: difference;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            p {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            a[x-apple-data-detectors] {
                color: inherit!important;
                text-decoration: none!important;
            }

            u+.emailify a {
                color: inherit!important;
                text-decoration: none!important;
            }

            #MessageViewBody a {
                color: inherit!important;
                text-decoration: none!important;
            }

            @media only screen and (max-width: 599px) {
                .emailify {
                    height:100%!important;
                    margin: 0!important;
                    padding: 0!important;
                    width: 100%!important;
                }

                u+.emailify .glist {
                    margin-left: 1em!important;
                }

                td.x {
                    padding-left: 0!important;
                    padding-right: 0!important;
                }

                div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td {
                    padding-right: 16px!important
                }

                div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td {
                    padding-left: 16px!important
                }
            }
        </style>
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
    </head>
    <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#f8f8f8;">
        <div style="background-color:#f8f8f8;" lang="en" dir="auto">
            <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:22px 32px 16px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0;padding:0;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                        <tbody>
                                                            <tr>
                                                                
                                                                <td style="width:100px;">
                                                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMTAwIDMzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjA5Ml82MDk0KSI+CjxwYXRoIGQ9Ik0zNi45ODY5IDYuOTM3ODFIMzkuNTQ4QzQyLjc3MjcgNi45Mzc4MSA0NC40Mzg5IDkuNDAzNDcgNDMuODAyNCAxMi4zNzE1QzQzLjIxOTcgMTUuMTQ5NCA0MS40OTkgMTYuNzYxOCAzOC40NzgxIDE2Ljc2MThIMzQuODc0NUwzNi45ODg1IDYuOTM4NTZMMzYuOTg2OSA2LjkzNzgxWk0zOC45MTA3IDE0LjA5MTZDNDAuMTE2MiAxNC4wOTE2IDQwLjY5ODkgMTMuMjc4NSA0MC45NTY1IDEyLjA0NTdDNDEuMjU0MyAxMC42MjI3IDQwLjg2MTggOS42MDY1NCAzOS40NTI1IDkuNjA2NTRIMzkuMzE2OUwzOC4zNjgyIDE0LjA5MTZIMzguOTFIMzguOTEwN1oiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjEzMjMgNi45Mzc4MUg0OS4wNDU3TDQ2LjkzMTcgMTYuNzYxSDQ0LjAxODRMNDYuMTMyMyA2LjkzNzgxWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNTQuNTE5MyAxNS44MjZINTEuNTY1OEw1MC45ODMxIDE2Ljc2MUg0Ny42NzczTDU0LjUyMjMgNi45MTY1Nkg1NS4xNTk1TDU3LjgzODcgMTYuNzYxSDU0LjY2ODVMNTQuNTE5MyAxNS44MjZaTTU0LjE2NjkgMTMuNjg1NEw1My44OTU3IDEyLjAzMkw1Mi44Nzk2IDEzLjY4NTRINTQuMTY2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTYxLjYwMDcgNi45MTY1OUw2NC4zNDEzIDEyLjAxODRMNjkuNDkyMSA2LjkxNjU5SDY5Ljk2OTVMNjguNjA5NCAxNi43NjFINjUuODcyNkw2Ni4zNDY5IDEzLjU0OThMNjMuNTI5MSAxNi41MDM0TDYyLjAyNSAxMy4yMzc2TDYxLjA2MjggMTYuNzYwM0g1OC4zMTIzTDYxLjE0OTEgNi45MTU4MyIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNzAuNjY4OCAxMS4xOTI1QzcxLjI2NTEgOC40MTQ2MyA3My4zNTE4IDYuNzM0NzQgNzYuMTgzMyA2LjczNDc0Qzc5LjIwNSA2LjczNDc0IDgxLjQyNjYgOS41Mzk4NyA4MC44MDM4IDEyLjUwNzFDODAuMjA3NCAxNS4yODUgNzguMTM0NCAxNi45NjQ5IDc1LjMxNjUgMTYuOTY0OUM3Mi4yODE5IDE2Ljk2NDkgNzAuMDMyMyAxNC4xNTk4IDcwLjY2OTYgMTEuMTkyNUg3MC42Njg4Wk03Ny45NDQyIDEyLjE4MTNDNzguMjU1NiAxMC43NTgzIDc3LjMwNyA5LjQ4NTMxIDc1LjkxMjEgOS40ODUzMUM3NC43MTk1IDkuNDg1MzEgNzMuNzk4MSAxMC4yNzExIDczLjUyNzYgMTEuNTAzOUM3My4yMTYyIDEyLjkzOTggNzQuMTc3NyAxNC4yMTM2IDc1LjU3MzQgMTQuMjEzNkM3Ni43NjYgMTQuMjEzNiA3Ny42ODczIDEzLjQxNDIgNzcuOTQ0MiAxMi4xODEzWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNODMuNjUzNSA2LjkxNjU2TDg3Ljg2MjUgMTEuNDYzTDg4LjgzNzYgNi45Mzc3OEg5MS42OTY0TDg5LjYwNDQgMTYuNzM2OEg4OC45MTI2TDg0Ljc0NiAxMi4yMzU4TDgzLjc3MDEgMTYuNzYxSDgwLjkxMTNMODMuMDEzMiA2LjkxNjU2IiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik05My4wNTExIDYuOTM3ODFIOTUuNjEyMkM5OC44MzY5IDYuOTM3ODEgMTAwLjUwMyA5LjQwMzQ3IDk5Ljg2NjYgMTIuMzcxNUM5OS4yODQgMTUuMTQ5NCA5Ny41NjMyIDE2Ljc2MTggOTQuNTQyMyAxNi43NjE4SDkwLjkzNzlMOTMuMDUxOSA2LjkzODU2TDkzLjA1MTEgNi45Mzc4MVpNOTQuOTc0OSAxNC4wOTE2Qzk2LjE4MDQgMTQuMDkxNiA5Ni43NjMxIDEzLjI3ODUgOTcuMDIwNyAxMi4wNDU3Qzk3LjMxODUgMTAuNjIyNyA5Ni45MjYgOS42MDY1NCA5NS41MTY3IDkuNjA2NTRIOTUuMzgxMUw5NC40MzI0IDE0LjA5MTZIOTQuOTc0Mkg5NC45NzQ5WiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNMjcuNTgwMSAxMy4xODUzQzI4LjI5MjQgMTUuMzIyOCAyOC4xODYzIDE3LjczMTcgMjcuODA3NSAxOS43Nzc1QzI3LjQyODYgMjEuODIzNCAyNi4yMTYzIDI0LjAyMDggMjUuNjEwMSAyNC44NTQzQzI1LjAwNCAyNS42ODc5IDI0LjM5NzggMjYuNTIxNCAyMi44MDY3IDI3Ljg4NTNDMjEuMjE1NSAyOS4yNDkyIDE4LjE4NDcgMzAuMzg1OCAxNy4xMjM5IDMwLjYxMzFDMTYuMzk1OCAzMC43NjkyIDE1LjI3MzYgMzAuODg5NyAxNC42NDI1IDMwLjk0OTVDMTQuMzQ3NyAzMC45Nzc2IDE0LjA1MTUgMzAuOTkyIDEzLjc1NTIgMzAuOTkySDYuMDYxNTdMNi4zNzYwMiAyOC4xNTA1TDQuMTM3NzggMjguMTM2OEwzLjU5OTA2IDMzTDE0LjQ2NDQgMzIuOTU0NUMxNS4yNDg2IDMyLjk0NTQgMTYuNTQ1OCAzMi43ODE3IDE3LjMxMzQgMzIuNjIxMUMyMy43MTY3IDMxLjI3NjkgMjYuMjcxNiAyNy40MjE1IDI3LjYxOCAyNS42NUMyOC4zNzk1IDI0LjY0NzUgMjkuMDM1NyAyMy4xMTU0IDI5LjQ4NDIgMjEuODkzOUMyOS45NjkyIDIwLjU3MzkgMzAuMjU3MSAxOS4xOTAzIDMwLjM0MDQgMTcuNzg2MkMzMC4zOTY1IDE2Ljg0NTkgMzAuMzc4MyAxNS43MzEzIDMwLjI4NjYgMTQuNzAwN0MyOS45Njc2IDExLjEwMTUgMjcuOTk3NiA3Ljg0MzI2IDI0LjIwOTIgNS44NzMxNkMyMi4yOTk4IDQuODgwNTMgMjAuNTc3NSA0LjQ2Mzc3IDE5LjI4NDEgNC4yODE5MkMxOC44NDE2IDQuMjE5NzggMTcuNDE2NCA0LjEzMDM3IDE2Ljk3MDEgNC4xMzAzN0g3LjA4NDQ2TDQuNTQ2MTggMjUuMzA5SDYuNzQzNUw5LjA5MjM2IDYuMDYyNTlMMTcuMzg5OSA2LjEzMTU0QzE4LjM4NyA2LjEzOTg4IDE5LjM4MTEgNi4yNjg2OSAyMC4zNDExIDYuNTM2MTdDMjAuMzQxMSA2LjUzNjE3IDI1LjgzNzQgNy45NTY5MiAyNy41ODAxIDEzLjE4NTNaIiBmaWxsPSIjM0Y0MTkyIi8+CjxwYXRoIGQ9Ik0wIDI5LjkzMTJMMy43MTI3MSAtMi4xNjIzOGUtMDVIMTAuNDM5NUMxMC40Mzk1IC0yLjE2MjM4ZS0wNSAxNy44NDkxIC0wLjA0MjQ1NDYgMjAuNDU3OCAwLjY4MTkzN0MyMy4xODU1IDEuNDM5NjcgMjYuNDQzNiAyLjg3OTM2IDI4Ljg2ODIgNi4xMzc2MUMyOC44NjgyIDYuMTM3NjEgMzAuMjMyMSA4LjI1OTI2IDMwLjgzODIgMTAuNzU5OEMzMC44MzgyIDEwLjc1OTggMjkuNDc0NCA3LjEyMjY2IDI2Ljk3NCA1LjE1MjU2QzI0LjY5NjQgMy4zNTc0OSAyMC42MDkzIDIuNDI0NzIgMTguMTg0NyAyLjE5NzRDMTUuMDE1MyAxLjkwMDM3IDUuOTEwMDMgMi4wNDU4NiA1LjkxMDAzIDIuMDQ1ODZMMi43Mjc3MSAyOC4xMTE4QzIuNzI3NzEgMjguMTExOCA5LjI0Mzg5IDI4LjI2MzQgMTAuNzU5MyAyNy45NjAzQzExLjUxNyAyNy44MDg4IDE4LjU2MzYgMjYuOTc1MyAyMi44ODI0IDIwLjY4NjFDMjIuODgyNCAyMC42ODYxIDE5LjMyMTMgMjcuNTA1NyAxMC42ODM1IDI5LjMyNDJDMTAuNjgzNSAyOS4zMjQyIDguMzA0MzUgMjkuNzc4OSA1Ljg1Njk5IDI5LjkzMDRDMy40MDk2MyAzMC4wODIgMCAyOS45MzA0IDAgMjkuOTMwNFYyOS45MzEyWiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDcuNjcxMiA2LjI5NjAxQzQ3LjMxMDYgNS4yOTczMiA0Ni45NTkgNC4zMjI4OCA0Ni42MDA2IDMuMzI4NzRDNDcuNTM4NiAzLjQ0NDY3IDQ4LjQ1OTIgMy41NTkwOSA0OS40MDU2IDMuNjc1NzhDNDguODI4MiA0LjU0NzkzIDQ4LjI1NzcgNS40MTAyMyA0Ny42NzEyIDYuMjk2MDFaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00Ni4wNjY0IDEuMzkyNzJDNDYuMzE2NSAxLjMyODMxIDQ2LjU2NDIgMS4yNTQ4MSA0Ni44MTY2IDEuMjAyNTNDNDYuOTQ1NCAxLjE3NjAxIDQ3LjA4NDggMS4xNjY5MiA0Ny4yMTUxIDEuMTgyMDdDNDcuOTQwMiAxLjI2NTQyIDQ4LjY2MzggMS4zNjI0MSA0OS4zODg5IDEuNDQ3MjhDNDkuNTM4MiAxLjQ2NDcgNDkuNjcyMyAxLjUwNzE0IDQ5Ljc5OTYgMS41ODUxOEM0OS45OTM2IDEuNzA0MTUgNTAuMTkzNiAxLjgxNDc4IDUwLjQxNzkgMS45NDUxMUM1MC4yODUzIDEuOTgyOTkgNTAuMTgzOCAyLjAxMzMgNTAuMDgwNyAyLjA0MjFDNDkuODk1OCAyLjA5MzYyIDQ5LjcxMTcgMi4xNDUxNSA0OS41MjYxIDIuMTkzNjRDNDkuNDg3NCAyLjIwMzQ5IDQ5LjQ0NDIgMi4yMDY1MiA0OS40MDQ4IDIuMjAxOThDNDguNTg3MyAyLjEwMTk2IDQ3Ljc2OSAyLjAwMDQyIDQ2Ljk1MTQgMS44OTg4OUM0Ni45MjE5IDEuODk1MSA0Ni44ODg1IDEuODk0MzQgNDYuODYzNSAxLjg3OTk0QzQ2LjU5NTMgMS43MjkxNSA0Ni4zMjk0IDEuNTc1MzMgNDYuMDYyNyAxLjQyMzAzQzQ2LjA2MzQgMS40MTMxOCA0Ni4wNjQ5IDEuNDAyNTcgNDYuMDY1NyAxLjM5MjcySDQ2LjA2NjRaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00OS40NTU2IDMuMzM5MzVDNDguNTA1NSAzLjIyMTkgNDcuNTc4MSAzLjEwNjcyIDQ2LjYzNyAyLjk5MDc5QzQ2Ljc0NzYgMi43MTcyNSA0Ni44NTYgMi40NDk3NyA0Ni45Njg5IDIuMTcwMTdDNDcuMDI2NCAyLjE3Njk5IDQ3LjA4MSAyLjE4MzgxIDQ3LjEzNjMgMi4xOTA2MkM0Ny44MjY2IDIuMjc2MjUgNDguNTE2OCAyLjM2NDE1IDQ5LjIwNzEgMi40NDU5OEM0OS4zMDQxIDIuNDU3MzUgNDkuMzQ4OCAyLjQ4Mzg3IDQ5LjM1NzkgMi41OTIyMkM0OS4zNzkxIDIuODMzOTQgNDkuNDE5MyAzLjA3NDE0IDQ5LjQ1NDEgMy4zMzg1OUw0OS40NTU2IDMuMzM5MzVaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00NS4xODUyIDIuNTE1NjlDNDUuMjkyOCAyLjU4MDg1IDQ1LjQwMTIgMi42NDQ1IDQ1LjUwOCAyLjcxMTk0QzQ1Ljc2OTQgMi44NzU2MSA0Ni4wMzA4IDMuMDM4NTIgNDYuMjg5MiAzLjIwNjc0QzQ2LjMyOTMgMy4yMzI1IDQ2LjM2NzIgMy4yNzg3MiA0Ni4zODMxIDMuMzIzNDNDNDYuNjgwOSA0LjE3MDU3IDQ2Ljk3NDkgNS4wMTk5OSA0Ny4yNjg5IDUuODY3ODlDNDcuMjc4NyA1Ljg5NTE3IDQ3LjI4NCA1LjkyMzk3IDQ3LjI2OTYgNS45NjMzN0M0Ni41Njk1IDQuODE5OTUgNDUuODcwMiAzLjY3NjUzIDQ1LjE3MDEgMi41MzMxMUM0NS4xNzU0IDIuNTI3MDUgNDUuMTc5OSAyLjUyMTc1IDQ1LjE4NTIgMi41MTU2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUwLjk4MDggMy4yNTgyOUM1MC4wMjk5IDQuMTkxMDYgNDkuMDc4MyA1LjEyMzA3IDQ4LjEyNzQgNi4wNTU4M0M0OC4xMjA1IDYuMDUxMjkgNDguMTEzIDYuMDQ3NSA0OC4xMDYxIDYuMDQyOTVDNDguMTI0MyA2LjAxMTg5IDQ4LjE0MTggNS45ODAwNiA0OC4xNjE1IDUuOTQ5NzVDNDguNjQ4NiA1LjIxNzc4IDQ5LjEzNTEgNC40ODUwNiA0OS42Mjc2IDMuNzU1MzZDNDkuNjY3NyAzLjY5NjI2IDQ5LjczOTcgMy42NDYyNSA0OS44MDc5IDMuNjIyQzUwLjE1ODcgMy40OTc3MyA1MC41MTI2IDMuMzgzMzEgNTAuODY1NyAzLjI2NTg2QzUwLjg5OTggMy4yNTQ1IDUwLjkzNDYgMy4yNDc2OCA1MC45Njk1IDMuMjM4NTlDNTAuOTczMyAzLjI0NDY1IDUwLjk3NzEgMy4yNTE0NyA1MC45ODA4IDMuMjU3NTNWMy4yNTgyOVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjM5MyAyLjk2ODgxQzQ1Ljk0OTcgMi43MDU4OCA0NS41MjcgMi40NTU4MyA0NS4wOTU4IDIuMTk5NzJDNDUuMTEyNSAyLjE3NTQ3IDQ1LjEyMzkgMi4xNTI3NCA0NS4xNDEzIDIuMTM2MDdDNDUuMzI5MiAxLjk1MTk0IDQ1LjUxOTQgMS43NzAwOCA0NS43MDU4IDEuNTg0NDRDNDUuNzQ3NCAxLjU0Mjc2IDQ1Ljc3ODUgMS41MzUxOCA0NS44MzE2IDEuNTY1NDlDNDYuMTA1OCAxLjcyMjM0IDQ2LjM4MjQgMS44NzQ2NSA0Ni42NTU5IDIuMDMyMjZDNDYuNjg0IDIuMDQ4MTcgNDYuNzE5NiAyLjA5OTY5IDQ2LjcxMiAyLjEyMDE1QzQ2LjYxMiAyLjM5ODI0IDQ2LjUwNTEgMi42NzQwNiA0Ni4zOTMgMi45Njg4MVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUxLjEzOTIgMi45MjU2MkM1MC42NjY0IDMuMDc3OTIgNTAuMjA0MiAzLjIyNjQ0IDQ5LjcyMzggMy4zODAyNkM0OS42NzQ2IDMuMDU4MjIgNDkuNjI4NCAyLjc1NTEzIDQ5LjU4MDYgMi40Mzc2NEM0OS42Nzg0IDIuNDE0MTUgNDkuNzcxNiAyLjM5MjE4IDQ5Ljg2NTUgMi4zNzAyQzUwLjExMSAyLjMxMzM3IDUwLjM1NjUgMi4yNTgwNiA1MC42MDEyIDIuMTk4MkM1MC42NjY0IDIuMTgyMjkgNTAuNzAyIDIuMTk1MTcgNTAuNzM3NiAyLjI1NTc5QzUwLjg0NzUgMi40NDM3IDUwLjk2NjUgMi42MjcwNyA1MS4wODA5IDIuODEzNDhDNTEuMDk5OCAyLjg0NDU0IDUxLjExNSAyLjg3ODY0IDUxLjE0IDIuOTI2MzhMNTEuMTM5MiAyLjkyNTYyWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNDEuNTc0OCAyMS42NjI4SDM5LjI3NzVMMzcuNzU5OCAyOC44MDA2SDM0LjgxOTlMMzYuMzM3NiAyMS42NjI4SDM0LjA1MzlMMzQuNjU1NSAxOC44ODcySDQyLjE3NjRMNDEuNTc0OCAyMS42NjI4WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDEuNjcwMyAyMy4xODEzQzQyLjI3MTkgMjAuMzc3NyA0NC4zNzc1IDE4LjY4MjYgNDcuMjM1NSAxOC42ODI2QzUwLjI4NDUgMTguNjgyNiA1Mi41MjczIDIxLjUxMzUgNTEuODk4NCAyNC41MDgxQzUxLjI5NjggMjcuMzExNyA0OS4yMDQ4IDI5LjAwNjcgNDYuMzYwNCAyOS4wMDY3QzQzLjI5NzggMjkuMDA2NyA0MS4wMjc3IDI2LjE3NTggNDEuNjcwMyAyMy4xODEzWk00OS4wMTMxIDI0LjE3OTJDNDkuMzI3NSAyMi43NDMzIDQ4LjM3MDYgMjEuNDU4MiA0Ni45NjIgMjEuNDU4MkM0NS43NTg4IDIxLjQ1ODIgNDQuODI5MSAyMi4yNTE1IDQ0LjU1NTYgMjMuNDk1N0M0NC4yNDExIDI0Ljk0NTMgNDUuMjExNyAyNi4yMzA0IDQ2LjYyMDMgMjYuMjMwNEM0Ny44MjM1IDI2LjIzMDQgNDguNzUzMiAyNS40MjM0IDQ5LjAxMzEgMjQuMTc5MloiIGZpbGw9IiNFMUFCM0YiLz4KPHBhdGggZD0iTTUyLjk3ODEgMjQuOTMxNkw1NC4yNDk1IDE4Ljg4NzJINTcuMTg5NEw1NS44NzcxIDI1LjA5NTNDNTUuNzU0MyAyNS42Mjg4IDU1LjkzMTYgMjYuMDUyMyA1Ni42Mjk1IDI2LjA1MjNDNTcuMTQ5MiAyNi4wNTIzIDU3LjQ1IDI1LjczNzkgNTcuNTcyOCAyNS4xMjI2TDU4Ljg5OTUgMTguODg3Mkg2MS44Mzk0TDYwLjQ0NDUgMjUuNDUwN0M2MC4wMDczIDI3LjQ4ODIgNTguNzA3OCAyOS4wMDYgNTYuMTY0MiAyOS4wMDZDNTQuMDE3NyAyOS4wMDYgNTIuNDE3NCAyNy41OTczIDUyLjk3ODEgMjQuOTMwOVYyNC45MzE2WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNjcuODQxMSAyNC43MTI3TDY5LjQ5NTkgMjguODAxNEg2Ni4zNzhMNjQuOTk2NyAyNS4wMjcxTDY0LjE4OTcgMjguODAxNEg2MS4yNDk5TDYzLjM1NTUgMTguODg3Mkg2Ni45NjUyQzY5LjAxNjMgMTguODg3MiA3MC4xMzc3IDIwLjYyMzkgNjkuNzk1OSAyMi4yMzcxQzY5LjU2MzMgMjMuMzU4NiA2OC45MDcyIDI0LjI2MSA2Ny44NDAzIDI0LjcxMTlMNjcuODQxMSAyNC43MTI3Wk02NS43NzY0IDIxLjM0ODNMNjUuMzkzNyAyMy4xMzk2SDY1Ljg5OTlDNjYuNDE5NiAyMy4xMzk2IDY2LjgyOTYgMjIuODUyNCA2Ni45Mzk0IDIyLjMxOUM2Ny4wNjIyIDIxLjcxNzMgNjYuNjY1OSAyMS4zNDgzIDY2LjE0NjEgMjEuMzQ4M0g2NS43NzcxSDY1Ljc3NjRaIiBmaWxsPSIjRTFBQjNGIi8+CjxwYXRoIGQ9Ik02OS41OTE0IDI2LjkxMzlMNzEuNTYwNiAyNS40MDk4QzcxLjU2MDYgMjUuNDA5OCA3Mi4zMTMgMjYuNTE3NiA3My4yNyAyNi41MTc2QzczLjY3OTkgMjYuNTE3NiA3My45Mzk4IDI2LjI3MTMgNzMuOTk0MyAyNS45ODQyQzc0LjA0ODkgMjUuNjgzMyA3My45ODA3IDI1LjM1NTIgNzMuMzI0NSAyNC45NTgyQzcxLjU0NyAyMy45MDQ5IDcwLjc0IDIyLjY0NzEgNzEuMDk1NCAyMS4wNDc1QzcxLjM4MjYgMTkuNzYyNCA3Mi42NTQgMTguNjgxOSA3NC40MzE1IDE4LjY4MTlDNzYuNjE5IDE4LjY4MTkgNzcuNzEzMSAyMC4yMTMzIDc3LjcxMzEgMjAuMjEzM0w3NS44MjY1IDIxLjg4MThDNzUuODI2NSAyMS44ODE4IDc1LjI2NTggMjEuMTcxIDc0LjU5NiAyMS4xNzFDNzQuMTcyNCAyMS4xNzEgNzMuOTUzNCAyMS4zNzY0IDczLjkyNjEgMjEuNTk0NkM3My44NzE2IDIxLjg0MDkgNzMuODk4OSAyMi4xNDE3IDc0LjQ4NjggMjIuNDgzNEM3Ni4zNTk5IDIzLjU3NzYgNzcuMTgwNSAyNC43MjYzIDc2LjgxMTUgMjYuNDM1Qzc2LjUyNDMgMjcuNzg5MSA3NS4xOTgzIDI5LjAwNiA3My4yNyAyOS4wMDZDNzAuNjg1NSAyOS4wMDYgNjkuNTkxNCAyNi45MTM5IDY5LjU5MTQgMjYuOTEzOVoiIGZpbGw9IiNFMUFCM0YiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMDkyXzYwOTQiPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=">
                                                                </td>
                                                            
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:28px 32px 32px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:20px;">
                                                            <span style="font-size:20px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:120%;mso-line-height-alt:24px;mso-ansi-font-size:20px;">Hi, ${infoForm.name}!</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you for choosing Diamond Transfers for your tour experience! We are excited to help you explore the beautiful Dominican Republic.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Your tour reservation has been received and is currently being processed. Our team is working diligently to verify the availability of the tour on your requested date.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border:none;vertical-align:top;padding-bottom:22px;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" style="font-size:0;padding:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <p style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:100%;"></p>
                                                                                        <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:536px;" role="presentation" width="536px"><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table>
<![endif]-->
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <div style="text-align:left;">
                                                                                            <p style="Margin:0;text-align:left;mso-line-height-alt:20px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:119%;mso-line-height-alt:20px;mso-ansi-font-size:16px;">Tour Information</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <div style="text-align:left;">
                                                                                            <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#1d4fca;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Reservation ID: </span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#1d4fca;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.orderNumber}</span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Tour Name:</span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.tourName}</span>
                                                                                            </p>
                                                                                            <p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Number of Persons:</span>
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.numberOfPersons} </span>
                                                                                                </span>
                                                                                            </p>
                                                                                            <p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Date for Starting Tour:</span>
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.dateStartingTour} </span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
                                                                                        <p style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:100%;"></p>
                                                                                        <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:536px;" role="presentation" width="536px"><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table>
<![endif]-->
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">We will contact you shortly to confirm the availability of the tour and provide any additional information you may need.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">If you have any questions or require immediate assistance, please do not hesitate to contact us.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you for your patience and understanding. We look forward to providing you with an unforgettable tour experience.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#f8f8f8;background-color:#f8f8f8;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f8f8;background-color:#f8f8f8;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:568px;">
<![endif]-->
                                <div class="m y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:16px;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:500;color:#4d4d4d;line-height:123%;mso-line-height-alt:16px;mso-ansi-font-size:14px;">Dominican Transfers Diamond</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">+1 (849)-919-0260, +1 (347)-753-8219</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, </span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">Rep &uacute;blica Dominicana</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">7:00 AM - 12:00 PM</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
        </div>
    </body>
</html>

  `;
}

export function plainMessageForm(infoForm: IInfoBooking) {
  return `
  Hi, ${infoForm.name}!
Thank you for choosing Diamond Transfers for your tour experience! We are excited to help you explore the beautiful Dominican Republic.
Your tour reservation has been received and is currently being processed. Our team is working diligently to verify the availability of the tour on your requested date.

Tour Information
Reservation ID: ${infoForm.orderNumber} Tour Name: ${infoForm.tourName} Number of Persons: ${infoForm.numberOfPersons} Date for Starting Tour: ${infoForm.dateStartingTour}

We will contact you shortly to confirm the availability of the tour and provide any additional information you may need.
If you have any questions or require immediate assistance, please do not hesitate to contact us.
Thank you for your patience and understanding. We look forward to providing you with an unforgettable tour experience.

Dominican Transfers Diamond
+1 (849)-919-0260, +1 (347)-753-8219 8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, República Dominicana 7:00 AM - 12:00 PM
    `;
}

export function htmlMessageContact(infoContactForm: IInfoContactForm) {
  return `
    <!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <title></title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            #outlook a {
                padding: 0;
            }

            body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }

            table,td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
            }

            p {
                display: block;
                margin: 0;
            }
        </style>
        <!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
        <!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Inter:700,400,500" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style type="text/css">
            @media only screen and (min-width: 599px) {
                .h {
                    width:536px!important;
                    max-width: 536px;
                }

                .m {
                    width: 568px!important;
                    max-width: 568px;
                }
            }
        </style>
        <style media="screen and (min-width:599px)">
            .moz-text-html .h {
                width: 536px!important;
                max-width: 536px;
            }

            .moz-text-html .m {
                width: 568px!important;
                max-width: 568px;
            }
        </style>
        <style type="text/css">
            u+.emailify .g-screen {
                background: #000;
                mix-blend-mode: screen;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            u+.emailify .g-diff {
                background: #000;
                mix-blend-mode: difference;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            p {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            a[x-apple-data-detectors] {
                color: inherit!important;
                text-decoration: none!important;
            }

            u+.emailify a {
                color: inherit!important;
                text-decoration: none!important;
            }

            #MessageViewBody a {
                color: inherit!important;
                text-decoration: none!important;
            }

            @media only screen and (max-width: 599px) {
                .emailify {
                    height:100%!important;
                    margin: 0!important;
                    padding: 0!important;
                    width: 100%!important;
                }

                u+.emailify .glist {
                    margin-left: 1em!important;
                }

                td.x {
                    padding-left: 0!important;
                    padding-right: 0!important;
                }

                div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td {
                    padding-right: 16px!important
                }

                div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td {
                    padding-left: 16px!important
                }
            }
        </style>
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
    </head>
    <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#f8f8f8;">
        <div style="background-color:#f8f8f8;" lang="en" dir="auto">
            <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:22px 32px 16px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0;padding:0;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                        <tbody>
                                                            <tr>
                                                                
                                                                <td style="width:100px;">
                                                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMTAwIDMzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjA5Ml82MDk0KSI+CjxwYXRoIGQ9Ik0zNi45ODY5IDYuOTM3ODFIMzkuNTQ4QzQyLjc3MjcgNi45Mzc4MSA0NC40Mzg5IDkuNDAzNDcgNDMuODAyNCAxMi4zNzE1QzQzLjIxOTcgMTUuMTQ5NCA0MS40OTkgMTYuNzYxOCAzOC40NzgxIDE2Ljc2MThIMzQuODc0NUwzNi45ODg1IDYuOTM4NTZMMzYuOTg2OSA2LjkzNzgxWk0zOC45MTA3IDE0LjA5MTZDNDAuMTE2MiAxNC4wOTE2IDQwLjY5ODkgMTMuMjc4NSA0MC45NTY1IDEyLjA0NTdDNDEuMjU0MyAxMC42MjI3IDQwLjg2MTggOS42MDY1NCAzOS40NTI1IDkuNjA2NTRIMzkuMzE2OUwzOC4zNjgyIDE0LjA5MTZIMzguOTFIMzguOTEwN1oiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjEzMjMgNi45Mzc4MUg0OS4wNDU3TDQ2LjkzMTcgMTYuNzYxSDQ0LjAxODRMNDYuMTMyMyA2LjkzNzgxWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNTQuNTE5MyAxNS44MjZINTEuNTY1OEw1MC45ODMxIDE2Ljc2MUg0Ny42NzczTDU0LjUyMjMgNi45MTY1Nkg1NS4xNTk1TDU3LjgzODcgMTYuNzYxSDU0LjY2ODVMNTQuNTE5MyAxNS44MjZaTTU0LjE2NjkgMTMuNjg1NEw1My44OTU3IDEyLjAzMkw1Mi44Nzk2IDEzLjY4NTRINTQuMTY2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTYxLjYwMDcgNi45MTY1OUw2NC4zNDEzIDEyLjAxODRMNjkuNDkyMSA2LjkxNjU5SDY5Ljk2OTVMNjguNjA5NCAxNi43NjFINjUuODcyNkw2Ni4zNDY5IDEzLjU0OThMNjMuNTI5MSAxNi41MDM0TDYyLjAyNSAxMy4yMzc2TDYxLjA2MjggMTYuNzYwM0g1OC4zMTIzTDYxLjE0OTEgNi45MTU4MyIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNzAuNjY4OCAxMS4xOTI1QzcxLjI2NTEgOC40MTQ2MyA3My4zNTE4IDYuNzM0NzQgNzYuMTgzMyA2LjczNDc0Qzc5LjIwNSA2LjczNDc0IDgxLjQyNjYgOS41Mzk4NyA4MC44MDM4IDEyLjUwNzFDODAuMjA3NCAxNS4yODUgNzguMTM0NCAxNi45NjQ5IDc1LjMxNjUgMTYuOTY0OUM3Mi4yODE5IDE2Ljk2NDkgNzAuMDMyMyAxNC4xNTk4IDcwLjY2OTYgMTEuMTkyNUg3MC42Njg4Wk03Ny45NDQyIDEyLjE4MTNDNzguMjU1NiAxMC43NTgzIDc3LjMwNyA5LjQ4NTMxIDc1LjkxMjEgOS40ODUzMUM3NC43MTk1IDkuNDg1MzEgNzMuNzk4MSAxMC4yNzExIDczLjUyNzYgMTEuNTAzOUM3My4yMTYyIDEyLjkzOTggNzQuMTc3NyAxNC4yMTM2IDc1LjU3MzQgMTQuMjEzNkM3Ni43NjYgMTQuMjEzNiA3Ny42ODczIDEzLjQxNDIgNzcuOTQ0MiAxMi4xODEzWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNODMuNjUzNSA2LjkxNjU2TDg3Ljg2MjUgMTEuNDYzTDg4LjgzNzYgNi45Mzc3OEg5MS42OTY0TDg5LjYwNDQgMTYuNzM2OEg4OC45MTI2TDg0Ljc0NiAxMi4yMzU4TDgzLjc3MDEgMTYuNzYxSDgwLjkxMTNMODMuMDEzMiA2LjkxNjU2IiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik05My4wNTExIDYuOTM3ODFIOTUuNjEyMkM5OC44MzY5IDYuOTM3ODEgMTAwLjUwMyA5LjQwMzQ3IDk5Ljg2NjYgMTIuMzcxNUM5OS4yODQgMTUuMTQ5NCA5Ny41NjMyIDE2Ljc2MTggOTQuNTQyMyAxNi43NjE4SDkwLjkzNzlMOTMuMDUxOSA2LjkzODU2TDkzLjA1MTEgNi45Mzc4MVpNOTQuOTc0OSAxNC4wOTE2Qzk2LjE4MDQgMTQuMDkxNiA5Ni43NjMxIDEzLjI3ODUgOTcuMDIwNyAxMi4wNDU3Qzk3LjMxODUgMTAuNjIyNyA5Ni45MjYgOS42MDY1NCA5NS41MTY3IDkuNjA2NTRIOTUuMzgxMUw5NC40MzI0IDE0LjA5MTZIOTQuOTc0Mkg5NC45NzQ5WiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNMjcuNTgwMSAxMy4xODUzQzI4LjI5MjQgMTUuMzIyOCAyOC4xODYzIDE3LjczMTcgMjcuODA3NSAxOS43Nzc1QzI3LjQyODYgMjEuODIzNCAyNi4yMTYzIDI0LjAyMDggMjUuNjEwMSAyNC44NTQzQzI1LjAwNCAyNS42ODc5IDI0LjM5NzggMjYuNTIxNCAyMi44MDY3IDI3Ljg4NTNDMjEuMjE1NSAyOS4yNDkyIDE4LjE4NDcgMzAuMzg1OCAxNy4xMjM5IDMwLjYxMzFDMTYuMzk1OCAzMC43NjkyIDE1LjI3MzYgMzAuODg5NyAxNC42NDI1IDMwLjk0OTVDMTQuMzQ3NyAzMC45Nzc2IDE0LjA1MTUgMzAuOTkyIDEzLjc1NTIgMzAuOTkySDYuMDYxNTdMNi4zNzYwMiAyOC4xNTA1TDQuMTM3NzggMjguMTM2OEwzLjU5OTA2IDMzTDE0LjQ2NDQgMzIuOTU0NUMxNS4yNDg2IDMyLjk0NTQgMTYuNTQ1OCAzMi43ODE3IDE3LjMxMzQgMzIuNjIxMUMyMy43MTY3IDMxLjI3NjkgMjYuMjcxNiAyNy40MjE1IDI3LjYxOCAyNS42NUMyOC4zNzk1IDI0LjY0NzUgMjkuMDM1NyAyMy4xMTU0IDI5LjQ4NDIgMjEuODkzOUMyOS45NjkyIDIwLjU3MzkgMzAuMjU3MSAxOS4xOTAzIDMwLjM0MDQgMTcuNzg2MkMzMC4zOTY1IDE2Ljg0NTkgMzAuMzc4MyAxNS43MzEzIDMwLjI4NjYgMTQuNzAwN0MyOS45Njc2IDExLjEwMTUgMjcuOTk3NiA3Ljg0MzI2IDI0LjIwOTIgNS44NzMxNkMyMi4yOTk4IDQuODgwNTMgMjAuNTc3NSA0LjQ2Mzc3IDE5LjI4NDEgNC4yODE5MkMxOC44NDE2IDQuMjE5NzggMTcuNDE2NCA0LjEzMDM3IDE2Ljk3MDEgNC4xMzAzN0g3LjA4NDQ2TDQuNTQ2MTggMjUuMzA5SDYuNzQzNUw5LjA5MjM2IDYuMDYyNTlMMTcuMzg5OSA2LjEzMTU0QzE4LjM4NyA2LjEzOTg4IDE5LjM4MTEgNi4yNjg2OSAyMC4zNDExIDYuNTM2MTdDMjAuMzQxMSA2LjUzNjE3IDI1LjgzNzQgNy45NTY5MiAyNy41ODAxIDEzLjE4NTNaIiBmaWxsPSIjM0Y0MTkyIi8+CjxwYXRoIGQ9Ik0wIDI5LjkzMTJMMy43MTI3MSAtMi4xNjIzOGUtMDVIMTAuNDM5NUMxMC40Mzk1IC0yLjE2MjM4ZS0wNSAxNy44NDkxIC0wLjA0MjQ1NDYgMjAuNDU3OCAwLjY4MTkzN0MyMy4xODU1IDEuNDM5NjcgMjYuNDQzNiAyLjg3OTM2IDI4Ljg2ODIgNi4xMzc2MUMyOC44NjgyIDYuMTM3NjEgMzAuMjMyMSA4LjI1OTI2IDMwLjgzODIgMTAuNzU5OEMzMC44MzgyIDEwLjc1OTggMjkuNDc0NCA3LjEyMjY2IDI2Ljk3NCA1LjE1MjU2QzI0LjY5NjQgMy4zNTc0OSAyMC42MDkzIDIuNDI0NzIgMTguMTg0NyAyLjE5NzRDMTUuMDE1MyAxLjkwMDM3IDUuOTEwMDMgMi4wNDU4NiA1LjkxMDAzIDIuMDQ1ODZMMi43Mjc3MSAyOC4xMTE4QzIuNzI3NzEgMjguMTExOCA5LjI0Mzg5IDI4LjI2MzQgMTAuNzU5MyAyNy45NjAzQzExLjUxNyAyNy44MDg4IDE4LjU2MzYgMjYuOTc1MyAyMi44ODI0IDIwLjY4NjFDMjIuODgyNCAyMC42ODYxIDE5LjMyMTMgMjcuNTA1NyAxMC42ODM1IDI5LjMyNDJDMTAuNjgzNSAyOS4zMjQyIDguMzA0MzUgMjkuNzc4OSA1Ljg1Njk5IDI5LjkzMDRDMy40MDk2MyAzMC4wODIgMCAyOS45MzA0IDAgMjkuOTMwNFYyOS45MzEyWiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDcuNjcxMiA2LjI5NjAxQzQ3LjMxMDYgNS4yOTczMiA0Ni45NTkgNC4zMjI4OCA0Ni42MDA2IDMuMzI4NzRDNDcuNTM4NiAzLjQ0NDY3IDQ4LjQ1OTIgMy41NTkwOSA0OS40MDU2IDMuNjc1NzhDNDguODI4MiA0LjU0NzkzIDQ4LjI1NzcgNS40MTAyMyA0Ny42NzEyIDYuMjk2MDFaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00Ni4wNjY0IDEuMzkyNzJDNDYuMzE2NSAxLjMyODMxIDQ2LjU2NDIgMS4yNTQ4MSA0Ni44MTY2IDEuMjAyNTNDNDYuOTQ1NCAxLjE3NjAxIDQ3LjA4NDggMS4xNjY5MiA0Ny4yMTUxIDEuMTgyMDdDNDcuOTQwMiAxLjI2NTQyIDQ4LjY2MzggMS4zNjI0MSA0OS4zODg5IDEuNDQ3MjhDNDkuNTM4MiAxLjQ2NDcgNDkuNjcyMyAxLjUwNzE0IDQ5Ljc5OTYgMS41ODUxOEM0OS45OTM2IDEuNzA0MTUgNTAuMTkzNiAxLjgxNDc4IDUwLjQxNzkgMS45NDUxMUM1MC4yODUzIDEuOTgyOTkgNTAuMTgzOCAyLjAxMzMgNTAuMDgwNyAyLjA0MjFDNDkuODk1OCAyLjA5MzYyIDQ5LjcxMTcgMi4xNDUxNSA0OS41MjYxIDIuMTkzNjRDNDkuNDg3NCAyLjIwMzQ5IDQ5LjQ0NDIgMi4yMDY1MiA0OS40MDQ4IDIuMjAxOThDNDguNTg3MyAyLjEwMTk2IDQ3Ljc2OSAyLjAwMDQyIDQ2Ljk1MTQgMS44OTg4OUM0Ni45MjE5IDEuODk1MSA0Ni44ODg1IDEuODk0MzQgNDYuODYzNSAxLjg3OTk0QzQ2LjU5NTMgMS43MjkxNSA0Ni4zMjk0IDEuNTc1MzMgNDYuMDYyNyAxLjQyMzAzQzQ2LjA2MzQgMS40MTMxOCA0Ni4wNjQ5IDEuNDAyNTcgNDYuMDY1NyAxLjM5MjcySDQ2LjA2NjRaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00OS40NTU2IDMuMzM5MzVDNDguNTA1NSAzLjIyMTkgNDcuNTc4MSAzLjEwNjcyIDQ2LjYzNyAyLjk5MDc5QzQ2Ljc0NzYgMi43MTcyNSA0Ni44NTYgMi40NDk3NyA0Ni45Njg5IDIuMTcwMTdDNDcuMDI2NCAyLjE3Njk5IDQ3LjA4MSAyLjE4MzgxIDQ3LjEzNjMgMi4xOTA2MkM0Ny44MjY2IDIuMjc2MjUgNDguNTE2OCAyLjM2NDE1IDQ5LjIwNzEgMi40NDU5OEM0OS4zMDQxIDIuNDU3MzUgNDkuMzQ4OCAyLjQ4Mzg3IDQ5LjM1NzkgMi41OTIyMkM0OS4zNzkxIDIuODMzOTQgNDkuNDE5MyAzLjA3NDE0IDQ5LjQ1NDEgMy4zMzg1OUw0OS40NTU2IDMuMzM5MzVaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00NS4xODUyIDIuNTE1NjlDNDUuMjkyOCAyLjU4MDg1IDQ1LjQwMTIgMi42NDQ1IDQ1LjUwOCAyLjcxMTk0QzQ1Ljc2OTQgMi44NzU2MSA0Ni4wMzA4IDMuMDM4NTIgNDYuMjg5MiAzLjIwNjc0QzQ2LjMyOTMgMy4yMzI1IDQ2LjM2NzIgMy4yNzg3MiA0Ni4zODMxIDMuMzIzNDNDNDYuNjgwOSA0LjE3MDU3IDQ2Ljk3NDkgNS4wMTk5OSA0Ny4yNjg5IDUuODY3ODlDNDcuMjc4NyA1Ljg5NTE3IDQ3LjI4NCA1LjkyMzk3IDQ3LjI2OTYgNS45NjMzN0M0Ni41Njk1IDQuODE5OTUgNDUuODcwMiAzLjY3NjUzIDQ1LjE3MDEgMi41MzMxMUM0NS4xNzU0IDIuNTI3MDUgNDUuMTc5OSAyLjUyMTc1IDQ1LjE4NTIgMi41MTU2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUwLjk4MDggMy4yNTgyOUM1MC4wMjk5IDQuMTkxMDYgNDkuMDc4MyA1LjEyMzA3IDQ4LjEyNzQgNi4wNTU4M0M0OC4xMjA1IDYuMDUxMjkgNDguMTEzIDYuMDQ3NSA0OC4xMDYxIDYuMDQyOTVDNDguMTI0MyA2LjAxMTg5IDQ4LjE0MTggNS45ODAwNiA0OC4xNjE1IDUuOTQ5NzVDNDguNjQ4NiA1LjIxNzc4IDQ5LjEzNTEgNC40ODUwNiA0OS42Mjc2IDMuNzU1MzZDNDkuNjY3NyAzLjY5NjI2IDQ5LjczOTcgMy42NDYyNSA0OS44MDc5IDMuNjIyQzUwLjE1ODcgMy40OTc3MyA1MC41MTI2IDMuMzgzMzEgNTAuODY1NyAzLjI2NTg2QzUwLjg5OTggMy4yNTQ1IDUwLjkzNDYgMy4yNDc2OCA1MC45Njk1IDMuMjM4NTlDNTAuOTczMyAzLjI0NDY1IDUwLjk3NzEgMy4yNTE0NyA1MC45ODA4IDMuMjU3NTNWMy4yNTgyOVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjM5MyAyLjk2ODgxQzQ1Ljk0OTcgMi43MDU4OCA0NS41MjcgMi40NTU4MyA0NS4wOTU4IDIuMTk5NzJDNDUuMTEyNSAyLjE3NTQ3IDQ1LjEyMzkgMi4xNTI3NCA0NS4xNDEzIDIuMTM2MDdDNDUuMzI5MiAxLjk1MTk0IDQ1LjUxOTQgMS43NzAwOCA0NS43MDU4IDEuNTg0NDRDNDUuNzQ3NCAxLjU0Mjc2IDQ1Ljc3ODUgMS41MzUxOCA0NS44MzE2IDEuNTY1NDlDNDYuMTA1OCAxLjcyMjM0IDQ2LjM4MjQgMS44NzQ2NSA0Ni42NTU5IDIuMDMyMjZDNDYuNjg0IDIuMDQ4MTcgNDYuNzE5NiAyLjA5OTY5IDQ2LjcxMiAyLjEyMDE1QzQ2LjYxMiAyLjM5ODI0IDQ2LjUwNTEgMi42NzQwNiA0Ni4zOTMgMi45Njg4MVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUxLjEzOTIgMi45MjU2MkM1MC42NjY0IDMuMDc3OTIgNTAuMjA0MiAzLjIyNjQ0IDQ5LjcyMzggMy4zODAyNkM0OS42NzQ2IDMuMDU4MjIgNDkuNjI4NCAyLjc1NTEzIDQ5LjU4MDYgMi40Mzc2NEM0OS42Nzg0IDIuNDE0MTUgNDkuNzcxNiAyLjM5MjE4IDQ5Ljg2NTUgMi4zNzAyQzUwLjExMSAyLjMxMzM3IDUwLjM1NjUgMi4yNTgwNiA1MC42MDEyIDIuMTk4MkM1MC42NjY0IDIuMTgyMjkgNTAuNzAyIDIuMTk1MTcgNTAuNzM3NiAyLjI1NTc5QzUwLjg0NzUgMi40NDM3IDUwLjk2NjUgMi42MjcwNyA1MS4wODA5IDIuODEzNDhDNTEuMDk5OCAyLjg0NDU0IDUxLjExNSAyLjg3ODY0IDUxLjE0IDIuOTI2MzhMNTEuMTM5MiAyLjkyNTYyWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNDEuNTc0OCAyMS42NjI4SDM5LjI3NzVMMzcuNzU5OCAyOC44MDA2SDM0LjgxOTlMMzYuMzM3NiAyMS42NjI4SDM0LjA1MzlMMzQuNjU1NSAxOC44ODcySDQyLjE3NjRMNDEuNTc0OCAyMS42NjI4WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDEuNjcwMyAyMy4xODEzQzQyLjI3MTkgMjAuMzc3NyA0NC4zNzc1IDE4LjY4MjYgNDcuMjM1NSAxOC42ODI2QzUwLjI4NDUgMTguNjgyNiA1Mi41MjczIDIxLjUxMzUgNTEuODk4NCAyNC41MDgxQzUxLjI5NjggMjcuMzExNyA0OS4yMDQ4IDI5LjAwNjcgNDYuMzYwNCAyOS4wMDY3QzQzLjI5NzggMjkuMDA2NyA0MS4wMjc3IDI2LjE3NTggNDEuNjcwMyAyMy4xODEzWk00OS4wMTMxIDI0LjE3OTJDNDkuMzI3NSAyMi43NDMzIDQ4LjM3MDYgMjEuNDU4MiA0Ni45NjIgMjEuNDU4MkM0NS43NTg4IDIxLjQ1ODIgNDQuODI5MSAyMi4yNTE1IDQ0LjU1NTYgMjMuNDk1N0M0NC4yNDExIDI0Ljk0NTMgNDUuMjExNyAyNi4yMzA0IDQ2LjYyMDMgMjYuMjMwNEM0Ny44MjM1IDI2LjIzMDQgNDguNzUzMiAyNS40MjM0IDQ5LjAxMzEgMjQuMTc5MloiIGZpbGw9IiNFMUFCM0YiLz4KPHBhdGggZD0iTTUyLjk3ODEgMjQuOTMxNkw1NC4yNDk1IDE4Ljg4NzJINTcuMTg5NEw1NS44NzcxIDI1LjA5NTNDNTUuNzU0MyAyNS42Mjg4IDU1LjkzMTYgMjYuMDUyMyA1Ni42Mjk1IDI2LjA1MjNDNTcuMTQ5MiAyNi4wNTIzIDU3LjQ1IDI1LjczNzkgNTcuNTcyOCAyNS4xMjI2TDU4Ljg5OTUgMTguODg3Mkg2MS44Mzk0TDYwLjQ0NDUgMjUuNDUwN0M2MC4wMDczIDI3LjQ4ODIgNTguNzA3OCAyOS4wMDYgNTYuMTY0MiAyOS4wMDZDNTQuMDE3NyAyOS4wMDYgNTIuNDE3NCAyNy41OTczIDUyLjk3ODEgMjQuOTMwOVYyNC45MzE2WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNjcuODQxMSAyNC43MTI3TDY5LjQ5NTkgMjguODAxNEg2Ni4zNzhMNjQuOTk2NyAyNS4wMjcxTDY0LjE4OTcgMjguODAxNEg2MS4yNDk5TDYzLjM1NTUgMTguODg3Mkg2Ni45NjUyQzY5LjAxNjMgMTguODg3MiA3MC4xMzc3IDIwLjYyMzkgNjkuNzk1OSAyMi4yMzcxQzY5LjU2MzMgMjMuMzU4NiA2OC45MDcyIDI0LjI2MSA2Ny44NDAzIDI0LjcxMTlMNjcuODQxMSAyNC43MTI3Wk02NS43NzY0IDIxLjM0ODNMNjUuMzkzNyAyMy4xMzk2SDY1Ljg5OTlDNjYuNDE5NiAyMy4xMzk2IDY2LjgyOTYgMjIuODUyNCA2Ni45Mzk0IDIyLjMxOUM2Ny4wNjIyIDIxLjcxNzMgNjYuNjY1OSAyMS4zNDgzIDY2LjE0NjEgMjEuMzQ4M0g2NS43NzcxSDY1Ljc3NjRaIiBmaWxsPSIjRTFBQjNGIi8+CjxwYXRoIGQ9Ik02OS41OTE0IDI2LjkxMzlMNzEuNTYwNiAyNS40MDk4QzcxLjU2MDYgMjUuNDA5OCA3Mi4zMTMgMjYuNTE3NiA3My4yNyAyNi41MTc2QzczLjY3OTkgMjYuNTE3NiA3My45Mzk4IDI2LjI3MTMgNzMuOTk0MyAyNS45ODQyQzc0LjA0ODkgMjUuNjgzMyA3My45ODA3IDI1LjM1NTIgNzMuMzI0NSAyNC45NTgyQzcxLjU0NyAyMy45MDQ5IDcwLjc0IDIyLjY0NzEgNzEuMDk1NCAyMS4wNDc1QzcxLjM4MjYgMTkuNzYyNCA3Mi42NTQgMTguNjgxOSA3NC40MzE1IDE4LjY4MTlDNzYuNjE5IDE4LjY4MTkgNzcuNzEzMSAyMC4yMTMzIDc3LjcxMzEgMjAuMjEzM0w3NS44MjY1IDIxLjg4MThDNzUuODI2NSAyMS44ODE4IDc1LjI2NTggMjEuMTcxIDc0LjU5NiAyMS4xNzFDNzQuMTcyNCAyMS4xNzEgNzMuOTUzNCAyMS4zNzY0IDczLjkyNjEgMjEuNTk0NkM3My44NzE2IDIxLjg0MDkgNzMuODk4OSAyMi4xNDE3IDc0LjQ4NjggMjIuNDgzNEM3Ni4zNTk5IDIzLjU3NzYgNzcuMTgwNSAyNC43MjYzIDc2LjgxMTUgMjYuNDM1Qzc2LjUyNDMgMjcuNzg5MSA3NS4xOTgzIDI5LjAwNiA3My4yNyAyOS4wMDZDNzAuNjg1NSAyOS4wMDYgNjkuNTkxNCAyNi45MTM5IDY5LjU5MTQgMjYuOTEzOVoiIGZpbGw9IiNFMUFCM0YiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMDkyXzYwOTQiPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=">
                                                                </td>
                                                            
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:28px 32px 32px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:20px;">
                                                            <span style="font-size:20px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:120%;mso-line-height-alt:24px;mso-ansi-font-size:20px;">Hi, ${infoContactForm.name}</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you for contacting the Dominican Diamond Transfers team! We appreciate your interest and trust in our services.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Our team is reviewing your message and will get back to you as soon as possible. Whether you have questions, need assistance, or want to book a transfer, we're here to help you with any of your transportation needs.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">If you have any questions or require immediate assistance, please do not hesitate to contact us.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you once again for choosing Dominican Diamond Transfers. We look forward to assisting you soon!</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#f8f8f8;background-color:#f8f8f8;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f8f8;background-color:#f8f8f8;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:568px;">
<![endif]-->
                                <div class="m y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:16px;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:500;color:#4d4d4d;line-height:123%;mso-line-height-alt:16px;mso-ansi-font-size:14px;">Dominican Transfers Diamond</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">+1 (849)-919-0260, +1 (347)-753-8219</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, </span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">Rep &uacute;blica Dominicana</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">7:00 AM - 12:00 PM</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
        </div>
    </body>
</html>

    `;
}

export function plainMessageContact(infoContactForm: IInfoContactForm) {
  return `Hi, ${infoContactForm.name}
Thank you for contacting the Dominican Diamond Transfers team! We appreciate your interest and trust in our services.
Our team is reviewing your message and will get back to you as soon as possible. Whether you have questions, need assistance, or want to book a transfer, we're here to help you with any of your transportation needs.
If you have any questions or require immediate assistance, please do not hesitate to contact us.
Thank you once again for choosing Dominican Diamond Transfers. We look forward to assisting you soon!

Dominican Transfers Diamond
+1 (849)-919-0260, +1 (347)-753-8219 8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, República Dominicana 7:00 AM - 12:00 PM`;
}

export function htmlMessageBookingTeam(infoForm: IInfoBooking) {
  return `
  <!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <title></title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            #outlook a {
                padding: 0;
            }

            body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }

            table,td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
            }

            p {
                display: block;
                margin: 0;
            }
        </style>
        <!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
        <!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Inter:700,400,600,500" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style type="text/css">
            @media only screen and (min-width: 599px) {
                .h {
                    width:536px!important;
                    max-width: 536px;
                }

                .m {
                    width: 568px!important;
                    max-width: 568px;
                }
            }
        </style>
        <style media="screen and (min-width:599px)">
            .moz-text-html .h {
                width: 536px!important;
                max-width: 536px;
            }

            .moz-text-html .m {
                width: 568px!important;
                max-width: 568px;
            }
        </style>
        <style type="text/css">
            u+.emailify .g-screen {
                background: #000;
                mix-blend-mode: screen;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            u+.emailify .g-diff {
                background: #000;
                mix-blend-mode: difference;
                display: inline-block;
                padding: 0;
                margin: 0;
            }

            p {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            a[x-apple-data-detectors] {
                color: inherit!important;
                text-decoration: none!important;
            }

            u+.emailify a {
                color: inherit!important;
                text-decoration: none!important;
            }

            #MessageViewBody a {
                color: inherit!important;
                text-decoration: none!important;
            }

            @media only screen and (max-width: 599px) {
                .emailify {
                    height:100%!important;
                    margin: 0!important;
                    padding: 0!important;
                    width: 100%!important;
                }

                u+.emailify .glist {
                    margin-left: 1em!important;
                }

                td.x {
                    padding-left: 0!important;
                    padding-right: 0!important;
                }

                div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td {
                    padding-right: 16px!important
                }

                div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td {
                    padding-left: 16px!important
                }
            }
        </style>
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
    </head>
    <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#f8f8f8;">
        <div style="background-color:#f8f8f8;" lang="en" dir="auto">
            <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:22px 32px 16px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0;padding:0;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                        <tbody>
                                                            <tr>
                                                                
                                                                <td style="width:100px;">
                                                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMTAwIDMzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjA5Ml82MDk0KSI+CjxwYXRoIGQ9Ik0zNi45ODY5IDYuOTM3ODFIMzkuNTQ4QzQyLjc3MjcgNi45Mzc4MSA0NC40Mzg5IDkuNDAzNDcgNDMuODAyNCAxMi4zNzE1QzQzLjIxOTcgMTUuMTQ5NCA0MS40OTkgMTYuNzYxOCAzOC40NzgxIDE2Ljc2MThIMzQuODc0NUwzNi45ODg1IDYuOTM4NTZMMzYuOTg2OSA2LjkzNzgxWk0zOC45MTA3IDE0LjA5MTZDNDAuMTE2MiAxNC4wOTE2IDQwLjY5ODkgMTMuMjc4NSA0MC45NTY1IDEyLjA0NTdDNDEuMjU0MyAxMC42MjI3IDQwLjg2MTggOS42MDY1NCAzOS40NTI1IDkuNjA2NTRIMzkuMzE2OUwzOC4zNjgyIDE0LjA5MTZIMzguOTFIMzguOTEwN1oiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjEzMjMgNi45Mzc4MUg0OS4wNDU3TDQ2LjkzMTcgMTYuNzYxSDQ0LjAxODRMNDYuMTMyMyA2LjkzNzgxWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNTQuNTE5MyAxNS44MjZINTEuNTY1OEw1MC45ODMxIDE2Ljc2MUg0Ny42NzczTDU0LjUyMjMgNi45MTY1Nkg1NS4xNTk1TDU3LjgzODcgMTYuNzYxSDU0LjY2ODVMNTQuNTE5MyAxNS44MjZaTTU0LjE2NjkgMTMuNjg1NEw1My44OTU3IDEyLjAzMkw1Mi44Nzk2IDEzLjY4NTRINTQuMTY2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTYxLjYwMDcgNi45MTY1OUw2NC4zNDEzIDEyLjAxODRMNjkuNDkyMSA2LjkxNjU5SDY5Ljk2OTVMNjguNjA5NCAxNi43NjFINjUuODcyNkw2Ni4zNDY5IDEzLjU0OThMNjMuNTI5MSAxNi41MDM0TDYyLjAyNSAxMy4yMzc2TDYxLjA2MjggMTYuNzYwM0g1OC4zMTIzTDYxLjE0OTEgNi45MTU4MyIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNzAuNjY4OCAxMS4xOTI1QzcxLjI2NTEgOC40MTQ2MyA3My4zNTE4IDYuNzM0NzQgNzYuMTgzMyA2LjczNDc0Qzc5LjIwNSA2LjczNDc0IDgxLjQyNjYgOS41Mzk4NyA4MC44MDM4IDEyLjUwNzFDODAuMjA3NCAxNS4yODUgNzguMTM0NCAxNi45NjQ5IDc1LjMxNjUgMTYuOTY0OUM3Mi4yODE5IDE2Ljk2NDkgNzAuMDMyMyAxNC4xNTk4IDcwLjY2OTYgMTEuMTkyNUg3MC42Njg4Wk03Ny45NDQyIDEyLjE4MTNDNzguMjU1NiAxMC43NTgzIDc3LjMwNyA5LjQ4NTMxIDc1LjkxMjEgOS40ODUzMUM3NC43MTk1IDkuNDg1MzEgNzMuNzk4MSAxMC4yNzExIDczLjUyNzYgMTEuNTAzOUM3My4yMTYyIDEyLjkzOTggNzQuMTc3NyAxNC4yMTM2IDc1LjU3MzQgMTQuMjEzNkM3Ni43NjYgMTQuMjEzNiA3Ny42ODczIDEzLjQxNDIgNzcuOTQ0MiAxMi4xODEzWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNODMuNjUzNSA2LjkxNjU2TDg3Ljg2MjUgMTEuNDYzTDg4LjgzNzYgNi45Mzc3OEg5MS42OTY0TDg5LjYwNDQgMTYuNzM2OEg4OC45MTI2TDg0Ljc0NiAxMi4yMzU4TDgzLjc3MDEgMTYuNzYxSDgwLjkxMTNMODMuMDEzMiA2LjkxNjU2IiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik05My4wNTExIDYuOTM3ODFIOTUuNjEyMkM5OC44MzY5IDYuOTM3ODEgMTAwLjUwMyA5LjQwMzQ3IDk5Ljg2NjYgMTIuMzcxNUM5OS4yODQgMTUuMTQ5NCA5Ny41NjMyIDE2Ljc2MTggOTQuNTQyMyAxNi43NjE4SDkwLjkzNzlMOTMuMDUxOSA2LjkzODU2TDkzLjA1MTEgNi45Mzc4MVpNOTQuOTc0OSAxNC4wOTE2Qzk2LjE4MDQgMTQuMDkxNiA5Ni43NjMxIDEzLjI3ODUgOTcuMDIwNyAxMi4wNDU3Qzk3LjMxODUgMTAuNjIyNyA5Ni45MjYgOS42MDY1NCA5NS41MTY3IDkuNjA2NTRIOTUuMzgxMUw5NC40MzI0IDE0LjA5MTZIOTQuOTc0Mkg5NC45NzQ5WiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNMjcuNTgwMSAxMy4xODUzQzI4LjI5MjQgMTUuMzIyOCAyOC4xODYzIDE3LjczMTcgMjcuODA3NSAxOS43Nzc1QzI3LjQyODYgMjEuODIzNCAyNi4yMTYzIDI0LjAyMDggMjUuNjEwMSAyNC44NTQzQzI1LjAwNCAyNS42ODc5IDI0LjM5NzggMjYuNTIxNCAyMi44MDY3IDI3Ljg4NTNDMjEuMjE1NSAyOS4yNDkyIDE4LjE4NDcgMzAuMzg1OCAxNy4xMjM5IDMwLjYxMzFDMTYuMzk1OCAzMC43NjkyIDE1LjI3MzYgMzAuODg5NyAxNC42NDI1IDMwLjk0OTVDMTQuMzQ3NyAzMC45Nzc2IDE0LjA1MTUgMzAuOTkyIDEzLjc1NTIgMzAuOTkySDYuMDYxNTdMNi4zNzYwMiAyOC4xNTA1TDQuMTM3NzggMjguMTM2OEwzLjU5OTA2IDMzTDE0LjQ2NDQgMzIuOTU0NUMxNS4yNDg2IDMyLjk0NTQgMTYuNTQ1OCAzMi43ODE3IDE3LjMxMzQgMzIuNjIxMUMyMy43MTY3IDMxLjI3NjkgMjYuMjcxNiAyNy40MjE1IDI3LjYxOCAyNS42NUMyOC4zNzk1IDI0LjY0NzUgMjkuMDM1NyAyMy4xMTU0IDI5LjQ4NDIgMjEuODkzOUMyOS45NjkyIDIwLjU3MzkgMzAuMjU3MSAxOS4xOTAzIDMwLjM0MDQgMTcuNzg2MkMzMC4zOTY1IDE2Ljg0NTkgMzAuMzc4MyAxNS43MzEzIDMwLjI4NjYgMTQuNzAwN0MyOS45Njc2IDExLjEwMTUgMjcuOTk3NiA3Ljg0MzI2IDI0LjIwOTIgNS44NzMxNkMyMi4yOTk4IDQuODgwNTMgMjAuNTc3NSA0LjQ2Mzc3IDE5LjI4NDEgNC4yODE5MkMxOC44NDE2IDQuMjE5NzggMTcuNDE2NCA0LjEzMDM3IDE2Ljk3MDEgNC4xMzAzN0g3LjA4NDQ2TDQuNTQ2MTggMjUuMzA5SDYuNzQzNUw5LjA5MjM2IDYuMDYyNTlMMTcuMzg5OSA2LjEzMTU0QzE4LjM4NyA2LjEzOTg4IDE5LjM4MTEgNi4yNjg2OSAyMC4zNDExIDYuNTM2MTdDMjAuMzQxMSA2LjUzNjE3IDI1LjgzNzQgNy45NTY5MiAyNy41ODAxIDEzLjE4NTNaIiBmaWxsPSIjM0Y0MTkyIi8+CjxwYXRoIGQ9Ik0wIDI5LjkzMTJMMy43MTI3MSAtMi4xNjIzOGUtMDVIMTAuNDM5NUMxMC40Mzk1IC0yLjE2MjM4ZS0wNSAxNy44NDkxIC0wLjA0MjQ1NDYgMjAuNDU3OCAwLjY4MTkzN0MyMy4xODU1IDEuNDM5NjcgMjYuNDQzNiAyLjg3OTM2IDI4Ljg2ODIgNi4xMzc2MUMyOC44NjgyIDYuMTM3NjEgMzAuMjMyMSA4LjI1OTI2IDMwLjgzODIgMTAuNzU5OEMzMC44MzgyIDEwLjc1OTggMjkuNDc0NCA3LjEyMjY2IDI2Ljk3NCA1LjE1MjU2QzI0LjY5NjQgMy4zNTc0OSAyMC42MDkzIDIuNDI0NzIgMTguMTg0NyAyLjE5NzRDMTUuMDE1MyAxLjkwMDM3IDUuOTEwMDMgMi4wNDU4NiA1LjkxMDAzIDIuMDQ1ODZMMi43Mjc3MSAyOC4xMTE4QzIuNzI3NzEgMjguMTExOCA5LjI0Mzg5IDI4LjI2MzQgMTAuNzU5MyAyNy45NjAzQzExLjUxNyAyNy44MDg4IDE4LjU2MzYgMjYuOTc1MyAyMi44ODI0IDIwLjY4NjFDMjIuODgyNCAyMC42ODYxIDE5LjMyMTMgMjcuNTA1NyAxMC42ODM1IDI5LjMyNDJDMTAuNjgzNSAyOS4zMjQyIDguMzA0MzUgMjkuNzc4OSA1Ljg1Njk5IDI5LjkzMDRDMy40MDk2MyAzMC4wODIgMCAyOS45MzA0IDAgMjkuOTMwNFYyOS45MzEyWiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDcuNjcxMiA2LjI5NjAxQzQ3LjMxMDYgNS4yOTczMiA0Ni45NTkgNC4zMjI4OCA0Ni42MDA2IDMuMzI4NzRDNDcuNTM4NiAzLjQ0NDY3IDQ4LjQ1OTIgMy41NTkwOSA0OS40MDU2IDMuNjc1NzhDNDguODI4MiA0LjU0NzkzIDQ4LjI1NzcgNS40MTAyMyA0Ny42NzEyIDYuMjk2MDFaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00Ni4wNjY0IDEuMzkyNzJDNDYuMzE2NSAxLjMyODMxIDQ2LjU2NDIgMS4yNTQ4MSA0Ni44MTY2IDEuMjAyNTNDNDYuOTQ1NCAxLjE3NjAxIDQ3LjA4NDggMS4xNjY5MiA0Ny4yMTUxIDEuMTgyMDdDNDcuOTQwMiAxLjI2NTQyIDQ4LjY2MzggMS4zNjI0MSA0OS4zODg5IDEuNDQ3MjhDNDkuNTM4MiAxLjQ2NDcgNDkuNjcyMyAxLjUwNzE0IDQ5Ljc5OTYgMS41ODUxOEM0OS45OTM2IDEuNzA0MTUgNTAuMTkzNiAxLjgxNDc4IDUwLjQxNzkgMS45NDUxMUM1MC4yODUzIDEuOTgyOTkgNTAuMTgzOCAyLjAxMzMgNTAuMDgwNyAyLjA0MjFDNDkuODk1OCAyLjA5MzYyIDQ5LjcxMTcgMi4xNDUxNSA0OS41MjYxIDIuMTkzNjRDNDkuNDg3NCAyLjIwMzQ5IDQ5LjQ0NDIgMi4yMDY1MiA0OS40MDQ4IDIuMjAxOThDNDguNTg3MyAyLjEwMTk2IDQ3Ljc2OSAyLjAwMDQyIDQ2Ljk1MTQgMS44OTg4OUM0Ni45MjE5IDEuODk1MSA0Ni44ODg1IDEuODk0MzQgNDYuODYzNSAxLjg3OTk0QzQ2LjU5NTMgMS43MjkxNSA0Ni4zMjk0IDEuNTc1MzMgNDYuMDYyNyAxLjQyMzAzQzQ2LjA2MzQgMS40MTMxOCA0Ni4wNjQ5IDEuNDAyNTcgNDYuMDY1NyAxLjM5MjcySDQ2LjA2NjRaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00OS40NTU2IDMuMzM5MzVDNDguNTA1NSAzLjIyMTkgNDcuNTc4MSAzLjEwNjcyIDQ2LjYzNyAyLjk5MDc5QzQ2Ljc0NzYgMi43MTcyNSA0Ni44NTYgMi40NDk3NyA0Ni45Njg5IDIuMTcwMTdDNDcuMDI2NCAyLjE3Njk5IDQ3LjA4MSAyLjE4MzgxIDQ3LjEzNjMgMi4xOTA2MkM0Ny44MjY2IDIuMjc2MjUgNDguNTE2OCAyLjM2NDE1IDQ5LjIwNzEgMi40NDU5OEM0OS4zMDQxIDIuNDU3MzUgNDkuMzQ4OCAyLjQ4Mzg3IDQ5LjM1NzkgMi41OTIyMkM0OS4zNzkxIDIuODMzOTQgNDkuNDE5MyAzLjA3NDE0IDQ5LjQ1NDEgMy4zMzg1OUw0OS40NTU2IDMuMzM5MzVaIiBmaWxsPSIjM0Q0MDk1Ii8+CjxwYXRoIGQ9Ik00NS4xODUyIDIuNTE1NjlDNDUuMjkyOCAyLjU4MDg1IDQ1LjQwMTIgMi42NDQ1IDQ1LjUwOCAyLjcxMTk0QzQ1Ljc2OTQgMi44NzU2MSA0Ni4wMzA4IDMuMDM4NTIgNDYuMjg5MiAzLjIwNjc0QzQ2LjMyOTMgMy4yMzI1IDQ2LjM2NzIgMy4yNzg3MiA0Ni4zODMxIDMuMzIzNDNDNDYuNjgwOSA0LjE3MDU3IDQ2Ljk3NDkgNS4wMTk5OSA0Ny4yNjg5IDUuODY3ODlDNDcuMjc4NyA1Ljg5NTE3IDQ3LjI4NCA1LjkyMzk3IDQ3LjI2OTYgNS45NjMzN0M0Ni41Njk1IDQuODE5OTUgNDUuODcwMiAzLjY3NjUzIDQ1LjE3MDEgMi41MzMxMUM0NS4xNzU0IDIuNTI3MDUgNDUuMTc5OSAyLjUyMTc1IDQ1LjE4NTIgMi41MTU2OVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUwLjk4MDggMy4yNTgyOUM1MC4wMjk5IDQuMTkxMDYgNDkuMDc4MyA1LjEyMzA3IDQ4LjEyNzQgNi4wNTU4M0M0OC4xMjA1IDYuMDUxMjkgNDguMTEzIDYuMDQ3NSA0OC4xMDYxIDYuMDQyOTVDNDguMTI0MyA2LjAxMTg5IDQ4LjE0MTggNS45ODAwNiA0OC4xNjE1IDUuOTQ5NzVDNDguNjQ4NiA1LjIxNzc4IDQ5LjEzNTEgNC40ODUwNiA0OS42Mjc2IDMuNzU1MzZDNDkuNjY3NyAzLjY5NjI2IDQ5LjczOTcgMy42NDYyNSA0OS44MDc5IDMuNjIyQzUwLjE1ODcgMy40OTc3MyA1MC41MTI2IDMuMzgzMzEgNTAuODY1NyAzLjI2NTg2QzUwLjg5OTggMy4yNTQ1IDUwLjkzNDYgMy4yNDc2OCA1MC45Njk1IDMuMjM4NTlDNTAuOTczMyAzLjI0NDY1IDUwLjk3NzEgMy4yNTE0NyA1MC45ODA4IDMuMjU3NTNWMy4yNTgyOVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTQ2LjM5MyAyLjk2ODgxQzQ1Ljk0OTcgMi43MDU4OCA0NS41MjcgMi40NTU4MyA0NS4wOTU4IDIuMTk5NzJDNDUuMTEyNSAyLjE3NTQ3IDQ1LjEyMzkgMi4xNTI3NCA0NS4xNDEzIDIuMTM2MDdDNDUuMzI5MiAxLjk1MTk0IDQ1LjUxOTQgMS43NzAwOCA0NS43MDU4IDEuNTg0NDRDNDUuNzQ3NCAxLjU0Mjc2IDQ1Ljc3ODUgMS41MzUxOCA0NS44MzE2IDEuNTY1NDlDNDYuMTA1OCAxLjcyMjM0IDQ2LjM4MjQgMS44NzQ2NSA0Ni42NTU5IDIuMDMyMjZDNDYuNjg0IDIuMDQ4MTcgNDYuNzE5NiAyLjA5OTY5IDQ2LjcxMiAyLjEyMDE1QzQ2LjYxMiAyLjM5ODI0IDQ2LjUwNTEgMi42NzQwNiA0Ni4zOTMgMi45Njg4MVoiIGZpbGw9IiMzRDQwOTUiLz4KPHBhdGggZD0iTTUxLjEzOTIgMi45MjU2MkM1MC42NjY0IDMuMDc3OTIgNTAuMjA0MiAzLjIyNjQ0IDQ5LjcyMzggMy4zODAyNkM0OS42NzQ2IDMuMDU4MjIgNDkuNjI4NCAyLjc1NTEzIDQ5LjU4MDYgMi40Mzc2NEM0OS42Nzg0IDIuNDE0MTUgNDkuNzcxNiAyLjM5MjE4IDQ5Ljg2NTUgMi4zNzAyQzUwLjExMSAyLjMxMzM3IDUwLjM1NjUgMi4yNTgwNiA1MC42MDEyIDIuMTk4MkM1MC42NjY0IDIuMTgyMjkgNTAuNzAyIDIuMTk1MTcgNTAuNzM3NiAyLjI1NTc5QzUwLjg0NzUgMi40NDM3IDUwLjk2NjUgMi42MjcwNyA1MS4wODA5IDIuODEzNDhDNTEuMDk5OCAyLjg0NDU0IDUxLjExNSAyLjg3ODY0IDUxLjE0IDIuOTI2MzhMNTEuMTM5MiAyLjkyNTYyWiIgZmlsbD0iIzNENDA5NSIvPgo8cGF0aCBkPSJNNDEuNTc0OCAyMS42NjI4SDM5LjI3NzVMMzcuNzU5OCAyOC44MDA2SDM0LjgxOTlMMzYuMzM3NiAyMS42NjI4SDM0LjA1MzlMMzQuNjU1NSAxOC44ODcySDQyLjE3NjRMNDEuNTc0OCAyMS42NjI4WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNDEuNjcwMyAyMy4xODEzQzQyLjI3MTkgMjAuMzc3NyA0NC4zNzc1IDE4LjY4MjYgNDcuMjM1NSAxOC42ODI2QzUwLjI4NDUgMTguNjgyNiA1Mi41MjczIDIxLjUxMzUgNTEuODk4NCAyNC41MDgxQzUxLjI5NjggMjcuMzExNyA0OS4yMDQ4IDI5LjAwNjcgNDYuMzYwNCAyOS4wMDY3QzQzLjI5NzggMjkuMDA2NyA0MS4wMjc3IDI2LjE3NTggNDEuNjcwMyAyMy4xODEzWk00OS4wMTMxIDI0LjE3OTJDNDkuMzI3NSAyMi43NDMzIDQ4LjM3MDYgMjEuNDU4MiA0Ni45NjIgMjEuNDU4MkM0NS43NTg4IDIxLjQ1ODIgNDQuODI5MSAyMi4yNTE1IDQ0LjU1NTYgMjMuNDk1N0M0NC4yNDExIDI0Ljk0NTMgNDUuMjExNyAyNi4yMzA0IDQ2LjYyMDMgMjYuMjMwNEM0Ny44MjM1IDI2LjIzMDQgNDguNzUzMiAyNS40MjM0IDQ5LjAxMzEgMjQuMTc5MloiIGZpbGw9IiNFMUFCM0YiLz4KPHBhdGggZD0iTTUyLjk3ODEgMjQuOTMxNkw1NC4yNDk1IDE4Ljg4NzJINTcuMTg5NEw1NS44NzcxIDI1LjA5NTNDNTUuNzU0MyAyNS42Mjg4IDU1LjkzMTYgMjYuMDUyMyA1Ni42Mjk1IDI2LjA1MjNDNTcuMTQ5MiAyNi4wNTIzIDU3LjQ1IDI1LjczNzkgNTcuNTcyOCAyNS4xMjI2TDU4Ljg5OTUgMTguODg3Mkg2MS44Mzk0TDYwLjQ0NDUgMjUuNDUwN0M2MC4wMDczIDI3LjQ4ODIgNTguNzA3OCAyOS4wMDYgNTYuMTY0MiAyOS4wMDZDNTQuMDE3NyAyOS4wMDYgNTIuNDE3NCAyNy41OTczIDUyLjk3ODEgMjQuOTMwOVYyNC45MzE2WiIgZmlsbD0iI0UxQUIzRiIvPgo8cGF0aCBkPSJNNjcuODQxMSAyNC43MTI3TDY5LjQ5NTkgMjguODAxNEg2Ni4zNzhMNjQuOTk2NyAyNS4wMjcxTDY0LjE4OTcgMjguODAxNEg2MS4yNDk5TDYzLjM1NTUgMTguODg3Mkg2Ni45NjUyQzY5LjAxNjMgMTguODg3MiA3MC4xMzc3IDIwLjYyMzkgNjkuNzk1OSAyMi4yMzcxQzY5LjU2MzMgMjMuMzU4NiA2OC45MDcyIDI0LjI2MSA2Ny44NDAzIDI0LjcxMTlMNjcuODQxMSAyNC43MTI3Wk02NS43NzY0IDIxLjM0ODNMNjUuMzkzNyAyMy4xMzk2SDY1Ljg5OTlDNjYuNDE5NiAyMy4xMzk2IDY2LjgyOTYgMjIuODUyNCA2Ni45Mzk0IDIyLjMxOUM2Ny4wNjIyIDIxLjcxNzMgNjYuNjY1OSAyMS4zNDgzIDY2LjE0NjEgMjEuMzQ4M0g2NS43NzcxSDY1Ljc3NjRaIiBmaWxsPSIjRTFBQjNGIi8+CjxwYXRoIGQ9Ik02OS41OTE0IDI2LjkxMzlMNzEuNTYwNiAyNS40MDk4QzcxLjU2MDYgMjUuNDA5OCA3Mi4zMTMgMjYuNTE3NiA3My4yNyAyNi41MTc2QzczLjY3OTkgMjYuNTE3NiA3My45Mzk4IDI2LjI3MTMgNzMuOTk0MyAyNS45ODQyQzc0LjA0ODkgMjUuNjgzMyA3My45ODA3IDI1LjM1NTIgNzMuMzI0NSAyNC45NTgyQzcxLjU0NyAyMy45MDQ5IDcwLjc0IDIyLjY0NzEgNzEuMDk1NCAyMS4wNDc1QzcxLjM4MjYgMTkuNzYyNCA3Mi42NTQgMTguNjgxOSA3NC40MzE1IDE4LjY4MTlDNzYuNjE5IDE4LjY4MTkgNzcuNzEzMSAyMC4yMTMzIDc3LjcxMzEgMjAuMjEzM0w3NS44MjY1IDIxLjg4MThDNzUuODI2NSAyMS44ODE4IDc1LjI2NTggMjEuMTcxIDc0LjU5NiAyMS4xNzFDNzQuMTcyNCAyMS4xNzEgNzMuOTUzNCAyMS4zNzY0IDczLjkyNjEgMjEuNTk0NkM3My44NzE2IDIxLjg0MDkgNzMuODk4OSAyMi4xNDE3IDc0LjQ4NjggMjIuNDgzNEM3Ni4zNTk5IDIzLjU3NzYgNzcuMTgwNSAyNC43MjYzIDc2LjgxMTUgMjYuNDM1Qzc2LjUyNDMgMjcuNzg5MSA3NS4xOTgzIDI5LjAwNiA3My4yNyAyOS4wMDZDNzAuNjg1NSAyOS4wMDYgNjkuNTkxNCAyNi45MTM5IDY5LjU5MTQgMjYuOTEzOVoiIGZpbGw9IiNFMUFCM0YiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMDkyXzYwOTQiPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMzIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=">
                                                                </td>
                                                            
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:28px 32px 32px 32px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:536px;">
<![endif]-->
                                <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:20px;">
                                                            <span style="font-size:20px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:120%;mso-line-height-alt:24px;mso-ansi-font-size:20px;">Hi, ${infoForm.name}!</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you for choosing Diamond Transfers for your tour experience! We are excited to help you explore the beautiful Dominican Republic.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Your tour reservation has been received and is currently being processed. Our team is working diligently to verify the availability of the tour on your requested date.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div class="h y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border:none;vertical-align:top;padding-bottom:22px;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" style="font-size:0;padding:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <p style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:100%;"></p>
                                                                                        <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:536px;" role="presentation" width="536px"><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table>
<![endif]-->
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <div style="text-align:left;">
                                                                                            <p style="Margin:0;text-align:left;mso-line-height-alt:20px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:119%;mso-line-height-alt:20px;mso-ansi-font-size:16px;">Tour Information</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                                                        <div style="text-align:left;">
                                                                                            <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#1d4fca;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Reservation ID: </span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#1d4fca;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.orderNumber}</span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Tour Name:</span>
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"> ${infoForm.tourName}</span>
                                                                                            </p>
                                                                                            <p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Number of Persons:</span>
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.numberOfPersons} </span>
                                                                                                </span>
                                                                                            </p>
                                                                                            <p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:600;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Date for Starting Tour:</span>
                                                                                                    <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">${infoForm.dateStartingTour} </span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
                                                                                        <p style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:100%;"></p>
                                                                                        <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #eaeaea;font-size:1px;margin:0px auto;width:536px;" role="presentation" width="536px"><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table>
<![endif]-->
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">We will contact you shortly to confirm the availability of the tour and provide any additional information you may need.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:22px;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">If you have any questions or require immediate assistance, please do not hesitate to contact us.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:left;">
                                                        <p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
                                                            <span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Thank you for your patience and understanding. We look forward to providing you with an unforgettable tour experience.</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
            <div class="r e ys" style="background:#f8f8f8;background-color:#f8f8f8;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f8f8;background-color:#f8f8f8;width:100%;">
                    <tbody>
                        <tr>
                            <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:568px;">
<![endif]-->
                                <div class="m y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:16px;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:500;color:#4d4d4d;line-height:123%;mso-line-height-alt:16px;mso-ansi-font-size:14px;">Dominican Transfers Diamond</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                    <div style="text-align:center;">
                                                        <p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">+1 (849)-919-0260, +1 (347)-753-8219</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, </span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">Rep &uacute;blica Dominicana</span>
                                                        </p>
                                                        <p style="Margin:0;mso-line-height-alt:18px;mso-ansi-font-size:14px;">
                                                            <span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:138%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">7:00 AM - 12:00 PM</span>
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
        </div>
    </body>
</html>

  `;
}

export function plainMessageBookingTeam(infoForm: IInfoBooking) {
  return `
  Hi, ${infoForm.name}!
Thank you for choosing Diamond Transfers for your tour experience! We are excited to help you explore the beautiful Dominican Republic.
Your tour reservation has been received and is currently being processed. Our team is working diligently to verify the availability of the tour on your requested date.

Tour Information
Reservation ID: ${infoForm.orderNumber} Tour Name: ${infoForm.tourName} Number of Persons: ${infoForm.numberOfPersons} Date for Starting Tour: ${infoForm.dateStartingTour}

We will contact you shortly to confirm the availability of the tour and provide any additional information you may need.
If you have any questions or require immediate assistance, please do not hesitate to contact us.
Thank you for your patience and understanding. We look forward to providing you with an unforgettable tour experience.

Dominican Transfers Diamond
+1 (849)-919-0260, +1 (347)-753-8219 8201 PETERS RD, 1000 #3 PLANTATION, FL 33324, República Dominicana 7:00 AM - 12:00 PM
    `;
}
