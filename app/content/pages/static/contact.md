---
title: Contact
permalink: "contact/"
layout: layouts/static.njk
path: contact
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="subject" 
  value="Inquiry from hairyvioletherbal.netlify.app" />
  <div>
    <label for="name">Your Name:</label>
    <input type="text" name="name" id="name" />
  </div>
  <div>
    <label for="email">Your Email:</label>
    <input type="email" name="email" id="email" />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea name="message" id="message"></textarea>
  </div>
    <button type="submit">Send</button>
</form>
