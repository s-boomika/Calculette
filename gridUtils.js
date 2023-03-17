export const buildColumns = ({ selector, columnStart, columnNb = 1 }) => {

    console.log(`For  ${selector} create Col[${columnStart}-${columnStart + columnNb}]`)
  
    const items = document.querySelectorAll(`${selector}`);
  
    items.forEach(function (item, index) {
      let col = (index % columnNb);
      console.log(`${item.textContent}: col[${columnStart + col}]`);
      item.style.cssText = `grid-column:${columnStart + col}`;
  
    }
    );
  }

  export const buildRows = ({ selector, rowStart, rowNb = 1 }) => {

    console.log(`For  ${selector} create Col[${rowStart}-${rowStart + rowNb}]`)
  
    const items = document.querySelectorAll(`${selector}`);
  
    items.forEach(function (item, index) {
      let row = (index % rowNb);
      console.log(`${item.textContent}: row[${rowStart + row}]`);
      item.style.cssText = `grid-row:${rowStart + row}`;
  
    }
    );
  }