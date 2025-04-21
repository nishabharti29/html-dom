// BAD: Causes reflow in each loop iteration
for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = elements[i].offsetWidth + 10 + 'px'; // Read then write
  }
  
  // BETTER: Read all, then write all
  const widths = [];
  for (let i = 0; i < elements.length; i++) {
     widths.push(elements[i].offsetWidth); // Read all widths
  }
  for (let i = 0; i < elements.length; i++) {
     elements[i].style.width = widths[i] + 10 + 'px'; // Write all widths
  }