const nodemailer = require("nodemailer");
const { data } = require("../constants");
require("dotenv").config();

async function sendReccomendationViaMail(
  receiverEmail,
  cleanseRecommendationIndex,
  response
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASS_MAIL,
    },
  });
  const { id, image, name, link } = data[cleanseRecommendationIndex];

  const body = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=600">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>Alternacareinc</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quando&display=swap');
          #outlook a { padding: 0; }
          .ExternalClass { width: 100%; }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div { line-height: 100%; }
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
          }
          html, body {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
          }
          table {
              border-spacing: 0px;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
          }
          table td, html, body {
              Margin: 0;
              padding: 0;
          }
          img {
              border: 0;
              outline: none;
              display: block;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
          table tr { border-collapse: collapse; }
          a {
              -webkit-text-size-adjust: none;
              -ms-text-size-adjust: none;
              mso-line-height-rule: exactly;
              text-decoration: none;
          }
          td {
              font-size: 0;
              line-height: 0;
          }
          img {
              padding: 0;
              display: block;
              align: texttop;
              align: absbottom;
          }
          @media only screen and (max-width: 576px) {
              *[class="gmail-fix"] { display: none!important; }
          }
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .quiz-container {
            max-width: 800px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .question {
            margin-bottom: 20px;
        }

        .options {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .option {
            margin-bottom: 5px;
        }
      </style>
      <!--[if (mso 16)]>
      <style type="text/css">
          a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
          <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
      <![endif]-->
  </head>
  <body bgcolor="#ffffff" style="background-color: #fffff; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; width: 100% !important; -webkit-text-size-adjust: none;" topmargin="0">
      <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#e4e5e7"></v:fill>
          </v:background>
      <![endif]-->
      <table width="100%" bgcolor="#ffffff" style="background-color: #ffffff;" border="0" cellpadding="0" cellspacing="0">
          <tr>
              <td valign="top" align="center">
                  <table class="main-table" width="600" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px;">
                      <tr>
                          <td valign="top" bgcolor="#ffffff">
                              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                      <td valign="top" align="center" style="padding: 36px 15px 30px">
                                          <a href="#" style="display: inline-block; border: 0; text-decoration: none;"><img alt="alternacareinc" src="https://firebasestorage.googleapis.com/v0/b/linkedin-post-generator-bcd8d.appspot.com/o/logo.webp?alt=media&token=756e9f75-0d84-4566-b490-3667a29457e1" width="256" height="64" style="display: block;" vspace="0" hspace="0" border="0"></a>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td valign="top" bgcolor="#1d1d1d">
                              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                      <td valign="top" align="center" style="padding: 12px;">
                                          <table border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/" style="border: 0; text-decoration: none; color: #fff;">Home</a>
                                                  </td>
                                                  <td width="19"></td>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/collections/all" style="border: 0; text-decoration: none; color: #fff;">Produts</a>
                                                  </td>
                                                  <td width="19"></td>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/collections/dr-robs-favorite-supplements" style="border: 0; text-decoration: none; color: #fff;">Dr Rob's Favorites</a>
                                                  </td>
                                                  <td width="19"></td>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/a/bundles/" style="border: 0; text-decoration: none; color: #fff;">Cleansing Protocols</a>
                                                  </td>
                                                  <td width="19"></td>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/pages/about-us" style="border: 0; text-decoration: none; color: #fff;">About Us</a>
                                                  </td>
                                                  <td width="19"></td>
                                                  <td style="font-family: Arial; font-size: 13px; line-height: 15px; font-weight: bold; text-transform: capitalize;">
                                                      <a href="https://shop.alternacareinc.com/pages/contact" style="border: 0; text-decoration: none; color: #fff;">Contact</a>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td valign="top" height="382">
                              <img alt="image" src="https://firebasestorage.googleapis.com/v0/b/linkedin-post-generator-bcd8d.appspot.com/o/banner.webp?alt=media&token=94584046-cacd-434c-9b61-8baac00cac52" width="100%" style="display: block;" vspace="0" hspace="0" border="0">     
                        </td>
                      </tr>
                      <tr>
                          <td valign="top" bgcolor="#010203" align="center" style="font-weight: 700; font-size: 17px; line-height: normal; color: #fff; font-family: Arial, sans-serif; padding: 7px 0 9px;">Same Day Shiping for Orders Placed Before 2pm on Weekdays</td>
                      </tr>
                      <tr>
                          <td valign="top">
                              <table class="table-width" width="100%" border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                      <td valign="top" width="252" style="padding: 50px 0 0 30px;">
                                          <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                              <tr>
                                                  <td style="font-weight: 700; font-size: 37px; line-height: 38px; color: #003466; font-family: Arial, sans-serif;"><span style="display: block; margin: 0 -20px 0 0;">${name}</span></td>
                                              </tr>
                                              <!-- <tr>
                                                  <td style="font-weight: 400; font-size: 24px; line-height: 27px; color: #003466; font-family: Arial, sans-serif; text-transform: uppercase; padding: 0 0 7px;">INT80VISWS</td>
                                              </tr> -->
                                              <!-- <tr>
                                                  <td style="font-weight: 700; font-size: 37px; line-height: 37px; color: #003466; font-family: Arial, sans-serif; text-transform: uppercase;">$929.95</td>
                                              </tr> -->
                                              <tr>
                                                  <td height="10"></td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <a href=${link} style="font-weight: 700; font-size: 20px; line-height: 20px; color: #ffffff; font-family: Arial, sans-serif; text-transform: uppercase; display: inline-block; padding: 8px 17px; background: #dc243a;">Buy Now</a>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                      <td valign="top" width="348">
                                          <img alt="image" src=${image} width="348" style="display: block;" vspace="0" hspace="0" border="0">
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                       <!-- <tr>
                           <td valign="top">
                               <table class="table-width" width="100%" border="0" cellpadding="0" cellspacing="0">
                                   <tr>
                                       <td valign="top" width="355">
                                           <img alt="image" src="${process.env.SERVER_URL}/prod.webp" width="355" style="display: block;" vspace="0" hspace="0" border="0">
                                       </td>
                                       <td valign="top" width="245" style="padding: 50px 30px 0 0;">
                                           <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                               <tr>
                                                   <td style="font-weight: 700; font-size: 33px; line-height: 38px; color: #003466; font-family: Arial, sans-serif; text-align: right;">International VISW Reels</td>
                                               </tr>
                                               <tr>
                                                   <td style="font-weight: 400; font-size: 24px; line-height: 27px; color: #003466; font-family: Arial, sans-serif; text-transform: uppercase; padding: 0 0 7px; text-align: right;">INT30VISWS</td>
                                               </tr>
                                               <tr>
                                                   <td style="font-weight: 700; font-size: 37px; line-height: 37px; color: #003466; font-family: Arial, sans-serif; text-transform: uppercase; text-align: right;">$679.95</td>
                                               </tr>
                                               <tr>
                                                   <td height="10"></td>
                                               </tr>
                                               <tr>
                                                   <td align="right">
                                                       <a href="#" style="font-weight: 700; font-size: 20px; line-height: 20px; color: #ffffff; font-family: Arial, sans-serif; text-transform: uppercase; display: inline-block; padding: 8px 17px; background: #dc243a;">Buy Now</a>
                                                   </td>
                                               </tr>
                                           </table>
                                       </td>
                                   </tr>
                               </table>
                           </td>
                       </tr> -->
                      <tr>
                          <td valign="top" height="46"></td>
                      </tr>
                      <!-- Footer -->
                      <tr>
                          <td valign="top" bgcolor="#f7f7f7" style="padding: 30px 3%; background: #f7f7f7;">
                              <table width="100%" class="footer" cellspacing="0" cellpadding="0" border="0">
                                  <tr>
                                      <td valign="top" width="65%" class="column">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tr>
                                                  <td valign="top" width="33%">
                                                      <strong style="font-size: 12px; line-height: normal; font-weight: 400; font-family: 'Quando', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 6px;">Information</strong>
                                                      <ul style="font-size: 11px; line-height: 24px; font-weight: 400; font-family: 'Mulish', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 10px; padding: 0; list-style: none;">
                                                          <li><a href="https://shop.alternacareinc.com/pages/about-us" style="text-decoration: none; color: #000000">About Us</a></li>
                                                          <li><a href="https://shop.alternacareinc.com/policies/privacy-policy" style="text-decoration: none; color: #000000">Privacy Policy</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Shipping Policy</a>
                                                          <li><a href="https://shop.alternacareinc.com/policies/refund-policy" style="text-decoration: none; color: #000000">Returns/Refunds Policy</a>
                                                          <li><a href="https://shop.alternacareinc.com/policies/terms-of-service" style="text-decoration: none; color: #000000">Terms and Conditions</a>
                                                      </ul>
                                                  </td>
                                                  <td valign="top" width="33%">
                                                      <strong style="font-size: 12px; line-height: normal; font-weight: 400; font-family: 'Quando', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 6px;">Support</strong>
                                                      <ul style="font-size: 11px; line-height: 24px; font-weight: 400; font-family: 'Mulish', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 10px; padding: 0; list-style: none;">
                                                          <li><a href="https://shop.alternacareinc.com/pages/contact" style="text-decoration: none; color: #000000;">Contact Us</a></li>
                                                          <li><a href="#" style="text-decoration: none; color: #000000;">FAQ</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000;">Brand Story</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000;">Track Your Order</a>
                                                      </ul>
                                                  </td>
                                                  <td valign="top" width="33%">
                                                      <strong style="font-size: 12px; line-height: normal; font-weight: 400; font-family: 'Quando', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 6px;">Shop</strong>
                                                      <ul style="font-size: 11px; line-height: 24px; font-weight: 400; font-family: 'Mulish', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 10px; padding: 0; list-style: none;">
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Coffee Tables</a></li>
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Consoles</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Dinning Table</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Side Tables</a>
                                                          <li><a href="#" style="text-decoration: none; color: #000000">Sinks</a>
                                                      </ul>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                      <td valign="top" width="35%" class="column">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tr>
                                                  <td valign="top" align="center">
                                                      <a href="#" class="logo" style="display: block; border: 0; text-decoration: none; margin: 0 auto 9px; width: 168px;">
                                                          <img src="logo.webp" width="100%" style="display: block;" vspace="0" hspace="0" border="0" alt="logo">
                                                      </a>
                                                      <p style="font-size: 12px; line-height: normal; font-weight: 400; font-family: 'Inter', sans-serif; color: #000000; text-transform: uppercase; display: block; margin: 0 0 20px;">WHERE LUXURY MEETS ELEGANCE</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td valign="top" align="center">
                                                      <p style="font-size: 10px; line-height: normal; font-weight: 400; font-family: 'Quando', sans-serif; color: #000000; text-transform: capitalize; display: block; margin: 0 0 3px;">Keep in touch</p>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td valign="top" align="center">
                                                      <table cellspacing="0" class="social-media" cellpadding="0" border="0" style="width: auto!important;">
                                                          <tr>
                                                              <td width="17">
                                                                  <a href="https://www.facebook.com/pages/Alternacare-Holistic-Healthcare-and-Weight-Loss/109680144933" style="display: block; border: 0; text-decoration: none; width: 17px;">
                                                                      <img src="${process.env.SERVER_URL}/facebook.png" width="17" style="display: block;" vspace="0" hspace="0" border="0" alt="icon">
                                                                  </a>
                                                              </td>
                                                              <td width="6"></td>
                                                              <td width="17">
                                                                  <a href="#" style="display: block; border: 0; text-decoration: none; width: 17px;">
                                                                      <img src="${process.env.SERVER_URL}/twitter.png" width="17" style="display: block;" vspace="0" hspace="0" border="0" alt="icon">
                                                                  </a>
                                                              </td>
                                                              <td width="6"></td>
                                                              <td width="17">
                                                                  <a href="#" style="display: block; border: 0; text-decoration: none; width: 17px;">
                                                                      <img src="${process.env.SERVER_URL}/whatsapp.png" width="17" style="display: block;" vspace="0" hspace="0" border="0" alt="icon">
                                                                  </a>
                                                              </td>
                                                              <td width="6"></td>
                                                              <td width="17">
                                                                  <a href="https://www.youtube.com/user/ALTERNACARE1" style="display: block; border: 0; text-decoration: none; width: 17px;">
                                                                      <img src="${process.env.SERVER_URL}/youtube.png" width="17" style="display: block;" vspace="0" hspace="0" border="0" alt="icon">
                                                                  </a>
                                                              </td>
                                                              <td width="6"></td>
                                                              <td width="17">
                                                                  <a href="https://instagram.com/docrob.holistic?utm_medium=copy_link" style="display: block; border: 0; text-decoration: none; width: 17px;">
                                                                      <img src="${process.env.SERVER_URL}/instagram.png" width="17" style="display: block;" vspace="0" hspace="0" border="0" alt="icon">
                                                                  </a>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          
      </table>
      
   </body>
  
  </html>`;

  const mailOptions = {
    to: receiverEmail,
    subject: `Cleanser Recommendations by Dr. Rob - Based on Quiz Results`,
    html: body,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error, "Error sending user email");
    throw new Error(error);
  }
  //   return body;
}

module.exports = { sendReccomendationViaMail };
