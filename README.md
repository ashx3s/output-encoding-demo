# OUTPUT ENCODING DEMO

This demo explores ways to protect a web application with output encoding.

## Tasks

- Write function that encodes user input before displaying it in the comment section
-

## Hack Test Code

```
<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); color: white; text-align: center; z-index: 9999;">
     <h1>You've Been Hacked!</h1>
     <p>Just kidding! This is a fake demo hack.</p>
     <button onclick="this.parentElement.style.display='none';">Close</button>
</div>
```

## Resources

- [Cross-Site Scripting Explained](https://www.youtube.com/watch?v=EoaDgUgS6QA)
- [AppSec 101 Output Encoding](https://qwiet.ai/appsec-101-output-encoding/)
- [XSS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

### Code Examples

```js
elem.textContent = dangerVariable;
elem.insertAdjacentText(dangerVariable);
elem.className = dangerVariable;
elem.setAttribute(safeName, dangerVariable);
formfield.value = dangerVariable;
document.createTextNode(dangerVariable);
document.createElement(dangerVariable);
elem.innerHTML = DOMPurify.sanitize(dangerVar);
```

### Patterns to avoid
