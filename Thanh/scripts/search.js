
const search = document.querySelector('#whole .table_header .input-group input'),
  table_rows = document.querySelectorAll('#whole .table_body tbody tr');

  search.addEventListener('input',searchTable);

  function searchTable(){
    table_rows.forEach((row,i) => {
      // console.log(row.textContent);
        let table_data = row.textContent.toLowerCase(),
          search_data = search.value.toLowerCase();

          row.classList.toggle('hide',table_data.indexOf(search_data) < 0);
          row.style.setProperty('--delay', i/25 + 's');
    })

    document.querySelectorAll('#whole .table_body tbody tr:not(.hide)').forEach((visible_row,i) => {
      visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b'
    });
  } 