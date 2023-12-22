document.addEventListener('DOMContentLoaded', function() {
  const div_api_data = document.getElementById('api_data');

  function objectToArray(dataObject) {
    return Object.entries(dataObject);
  }

  function formatData(dataObject) {
    let dataArray = objectToArray(dataObject);

    for (let i = 0; i < dataArray.length; i++) {
      let formatted = dataArray[i].join(': ');
      dataArray[i] = formatted;
    }

    return dataArray;
  }

  function printData(dataObject) {
    let formattedData = [];

    for (let i = 0; i < dataObject.length; i++) {
      formattedData.push(formatData(dataObject[i]));
    }

    for (let i = 0; i < formattedData.length; i++) {
      let formattedString = formattedData[i].join(' | ');
      let newDiv = document.createElement('div');
      newDiv.textContent = formattedString;
      div_api_data.appendChild(newDiv);

      let lineBreak = document.createElement('br');
      div_api_data.appendChild(lineBreak);
    }
  }

  function getAllResource() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        printData(data);
      })
  }

  getAllResource(); // Вызов функции при загрузке страницы
});
