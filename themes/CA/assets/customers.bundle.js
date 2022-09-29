(()=>{"use strict";var e=["DA","DE","EN","ES","FR","IT","JA","NL","PT","PT_BR"];function n(n){var t=n.replace(/-/,"_").toUpperCase();return-1!==e.indexOf(t)?t:-1!==e.indexOf(t.substring(0,2))?t.substring(0,2):"EN"}var t=/({\w+})/g,r={lastName:'[name="address[last_name]"]',firstName:'[name="address[first_name]"]',company:'[name="address[company]"]',address1:'[name="address[address1]"]',address2:'[name="address[address2]"]',country:'[name="address[country]"]',zone:'[name="address[province]"]',postalCode:'[name="address[zip]"]',city:'[name="address[city]"]',phone:'[name="address[phone]"]'};function a(e,n,r,a){var o=function(e,n){return e=e||"CA",n.filter((function(n){return n.code===e}))[0]}(r,a);!function(e,n){Object.keys(e).forEach((function(t){e[t].labels.forEach((function(e){e.textContent=n.labels[t]}))}))}(n,o),function(e,n,r){var a,o=r.formatting.edit,i=n.country.wrapper,c=!1;(a=o,a.split("_").map((function(e){var n=e.match(t);return n?n.map((function(e){var n=e.replace(/[{}]/g,"");switch(n){case"zip":return"postalCode";case"province":return"zone";default:return n}})):[]}))).forEach((function(t){t.forEach((function(r){n[r].wrapper.dataset.lineCount=t.length,n[r].wrapper&&("country"!==r?c?e.append(n[r].wrapper):e.insertBefore(n[r].wrapper,i):c=!0)}))}))}(e,n,o),function(e,n){var t=e.zone;if(t){if(0===n.zones.length)return t.wrapper.dataset.ariaHidden="true",void(t.input.innerHTML="");t.wrapper.dataset.ariaHidden="false";var r=t.input,a=r.cloneNode(!0);a.innerHTML="",n.zones.forEach((function(e){var n=document.createElement("option");n.value=e.code,n.textContent=e.name,a.appendChild(n)})),r.innerHTML=a.innerHTML,r.dataset.default&&(r.value=r.dataset.default)}}(n,o)}var o=document.querySelectorAll("[data-address]");o.length&&o.forEach((function(e){var t,o,i,c;o=(t=e).querySelector("[data-address-fields]"),i=t.querySelector("[data-address-form]"),c=t.querySelector("[data-address-delete-form]"),t.querySelectorAll("[data-address-toggle]").forEach((function(e){e.addEventListener("click",(function(){i.classList.toggle("hidden")}))})),function(e,t,o){t=t||"en";var i,c=function(e,n){var t={};return Object.keys(r).forEach((function(r){var a=e.querySelector(n[r]);t[r]=a?{wrapper:a.parentElement,input:a,labels:document.querySelectorAll('[for="'+a.id+'"]')}:{}})),t}(e,function(){for(var e=Object({}),n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}(r,(o=o||{inputSelectors:{}}).inputSelectors));(function(e){Object.keys(e).forEach((function(n){var t=e[n].input,r=e[n].labels;if(t){if("object"!=typeof t)throw new TypeError(e[n]+" is missing an input or select.");if("object"!=typeof r)throw new TypeError(e[n]+" is missing a label.")}}))})(c),(i=o.shippingCountriesOnly,i?fetch(location.origin+"/meta.json").then((function(e){return e.json()})).then((function(e){return-1!==e.ships_to_countries.indexOf("*")?null:e.ships_to_countries})).catch((function(){return null})):Promise.resolve(null)).then((function(r){return function(e){return fetch("https://country-service.shopifycloud.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({query:"query countries($locale: SupportedLocale!) {  countries(locale: $locale) {    name    code    labels {      address1      address2      city      company      country      firstName      lastName      phone      postalCode      zone    }    formatting {      edit    }    zones {      name      code    }  }}",operationName:"countries",variables:{locale:n(e)}})}).then((function(e){return e.json()})).then((function(e){return e.data.countries}))}(t).then((function(n){!function(e,n,t){!function(e,n){var t=e.country.input,r=t.cloneNode(!0);n.forEach((function(e){var n=document.createElement("option");n.value=e.code,n.textContent=e.name,r.appendChild(n)})),t.innerHTML=r.innerHTML,t.dataset.default&&(t.value=t.dataset.default)}(n,t);var r=n.country.input?n.country.input.value:null;(function(e,n,t){n.country.input.addEventListener("change",(function(r){a(e,n,r.target.value,t)}))})(e,n,t),a(e,n,r,t)}(e,c,function(e,n){return n?e.filter((function(e){return-1!==n.indexOf(e.code)})):e}(n,r))}))}))}(o,"en"),c&&c.addEventListener("submit",(function(e){var n=c.getAttribute("data-confirm-message");window.confirm(n||"Are you sure you wish to delete this address?")||e.preventDefault()}))}))})();