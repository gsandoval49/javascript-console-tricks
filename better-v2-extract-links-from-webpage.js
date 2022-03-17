var w = window.open("");
w.document.write("<table><thead><th>Name<th>Links<tbody>");
for(var x of document.querySelectorAll("a"))
w.document.write( "<tr><td>"+ x.textContent + "<td>"+x.href);