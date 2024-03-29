//FRONTEND

//window.alert('Hello world!');

//jeśli mój kod javascript jest opakowany w funkcję ready() z biblioteki jQuery to bezwzględu na
//struktuę DOM kod javascript będzie wykonywał się faktycznie wtedy kiedy elementy drzewa DOM
//będą gotowe do manipulowania na nich, czyli możemy pisać i wywoływać kod javascript
//bez względu na strukturę drzewa DOM, bo ten kod i tak wywoła się po całkowitym załadowaniu się
//drzewa DOM
$().ready(function() {

  document.addEventListener('DOMContentLoaded', function () {
    addElement();
  });

  function addElement() {
    let newLi = document.createElement("li");

    //"a" jest specjlanym tagiem odnoszącym się do hiperłącza
    let newLink = document.createElement("a");
    newLink.setAttribute("class", "nav-link");
    newLink.setAttribute("href", "/podstrona1.html");
    newLink.textContent = "Podstrona1";

    newLi.appendChild(newLink);

    let currentLi = document.getElementById("main_id");

    currentLi.parentNode.insertBefore(newLi, currentLi);
  }

//funkcję muszę wywołac po utworzeniu się na stronie tabeli o id "my-table"
//dlatego wywołuję funkcję w tym miejsu tzn. w drzewie DOM (struktura hierarchiczna dokumentu HTML)
//np korzeniem drzewa dom, czyli elementem najwyższym w hierarchi jest sekcja <html> </html>
//i ta sekcja ma dalej swoje dzieci tzn. <head> </head>, <body> </body> te dzieci moga mieć
//swoje dzieci i na tym pole struktura hierarchiczna drzewa DOM- Document Object Model.

  function action_click_table() {
    this.style.backgroundColor = "transparent";
  }

  var my_table = document.getElementById("my-table");
  my_table.addEventListener("click", action_click_table);

//querySelector to taka funkcja która działa na naszej stronie tzn. "document"
//i wyszukuje element po jego css selectorze
//za jego pomocą możemy ten elemenet przypisać do danej zmiennej, a następnie
//wyświetlić jego właściwości- czyli wyświelić obiekt, który reprezentuje ten element


//co ciekawa dzięki javascript nasza strona może reagować na różne zdarzenia
//zdarzenie onload="..." wczytuje się podczas załadowywania się naszej strony
//natomiast zdarzenie onclick="..." wykonuje się podczas naciśnięcia na element,
//którego to zdarzenie dotyczy

//metoda addEventListener() zostaje wywołana kiedykolwiek określone zdarzenie zostanie
//dostarczone do celu


  //kod ten odpowiada za ukrycie naszej tabeli i pojawienie się jej po 5 sekundach
  //dzieki bibliotece jQuery możemy odnosić się do poszczegolny elementów na mojej stronie
  //za pomocą selectora, w tym przypadku selectorem będzie odwołanie się do mojej tabeli
  //przez jej identyfikator jakim jest my-table, czyli selektor id #my-table
  //innym przykładem selektoru będzie dla elementu posiadającego
  //klasę class="myClass"  -->  $(".myClass")  lub
  //elementu div posiadającego klasę class="myClass"  -->  $(".myClass")
  //czyli za pomocą selektorów definiujemy jaka funkcja javyscript ma być wykonana
  //na elemencie wybranym przez selektor
  var tab = $("#my-table");

  tab.hide();

  //setTimeout() wykonuje określon funkcję po określonym czasie
  setTimeout(function () {

    tab.show();

  }, 10);

  //this piece of code results anonymous function call after click on an element "li"
  //whom id is "navbarScroll"
  //alternative call is .on("click", instead of .click(
  //".click(" it is a shortcut

  /*
  $("#navbarScroll li").click(function () {
    var link_text = $(this).find("a").text();
    alert(link_text + " clicked");
  });
  */

  /*
  $("ul.navbar-nav.me-auto.my-2.my-lg-0.navbar-nav-scroll").append('<li class="nav-item"><a href="https://google.com" ' +
    'class="nav-link">Google</a></li>');
  */


  //$(this) jest to sposób odwołania się do elementu, którego dotyczy to zdarzenie,
  //czyli do elementu .removeButton
  //closest wyszukuje najbliższego przodka elementu, czyli tzw. węzeł nadrzędny
  //spełniający określony sektor czyli u nas tym sektorem jest tr
  //no i następnie usuwa ten element

  /*$(".removeButton").click(function () {
    alert("Czy na pewno chcesz usunąć ten rekord")
    $(this).closest('tr').remove();
  })*/

  var json_string = '[{"name":"Python 3"},{"name":"SQL"},{"name":"Web design"},{"name":"Networking"},{"name":"Other skills"}]';

  var json_array = JSON.parse(json_string);

  jQuery.each(json_array, function () {
    console.log(this.name + " " + this.surname);
  });

  $.each(json_array, function (index, item) {
    $("#table_body_skills").append(
      '<tr>\n' +
      '  <td id="'+(index + 2)+'">' + (index + 2) + '</td>\n' +
      '  <td id="index'+(index + 2)+'">' + item.name + '</td>\n' +
      '  <td><button class="infoButton">More info</button></td>\n' +
      '</tr>'
    );
  });

  function setRowColors() {
    let rows = $("#table_body_skills tr");
    let rowCount = $("#table_body_skills tr").length;

    if (rowCount % 2 === 0) {
      rows.each(function (index) {
        if (index % 2 === 0) {
          $(this).css('background-color', 'white');
        } else {
          $(this).css('background-color', '#f2f2f2');
        } //#f2f2f2
      });
    } else {
      rows.each(function (index) {
        if (index % 2 === 0) {
          $(this).css('background-color', 'white');
        } else {
          $(this).css('background-color', '#f2f2f2');
        }
      });
    }

    return console.log(rowCount);
  }

  setRowColors();


  /*$(".removeButton").click(function () {
    $(this).closest('tr').remove();
  })*/

  $(".infoButton").click(function () {

    let $row = $(this).closest('tr');
    let $clone = $row.clone();


    if ($(this).text() === "More info") {
      $(this).text("Less info");

      $clone.find('input[type="text"]').val(''); // wyczyść pola tekstowe, jeśli istnieją

      $clone.find('.infoButton').each(function() {
        $(this).remove();

        /*
        $(".infoButton").click(function () {
        $(this).closest('tr').remove();
        });
        */
      });


      $clone.find('#1').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index1').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Knowledge about object-oriented programming.\n' +
          'E.g. JavaFX framework, Log4j library.');
      });

      $clone.find('#2').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index2').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Knowledge about algorithms, numerical methods and\n' +
          'OOP- building GUI in python. Operations simulating user interactions\n' +
          'with a browser by using the Selenium platform.\n' +
          'E.g. Tkinter library NumPy library Basic selenium operation.');
      });
      //$clone.find('td:last-child').append('<button class="removeButton">Remove</button>');

      $clone.find('#3').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index3').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Learning on my own the course provided by IBM - "DB2 SQL' +
          'Workshop". Use of the SQL query language using the pgAdmin client\n' +
          '(PostgreSQL) or MySQL Workbench. In the near future I am going to\n' +
          'learn some basics of PL/SQL.');
      });

      $clone.find('#4').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index4').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Frontend (essential knowledge of JavaScript, CSS,\n' +
          'HTML5, Bootstrap). Backend- basics of node.js.');
      });

      $clone.find('#5').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index5').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Knowledge about OSPF, BGP and RIP protocols.');
      });

      $clone.find('#6').each(function() {
        $(this).text(' ');
      });

      $clone.find('#index6').each(function() {
        $(this).css('font-weight', '500');
        $(this).text('Essential knowledge about unix terminal (Linux Mint is\n' +
          'my daily operating system). Ability to use the GitHub/GitLab platform.\n' +
          'General knowledge of Confluence and Jira (Kanban board).\n' +
          'Knowledge of the concept of running a project using the Agile method.');
      });

      $row.after($clone);

      setRowColors();

    } else if ($(this).text() === "Less info") {
      $(this).text("More info");
      let $clonedRow = $row.next();
      $clonedRow.remove();

      setRowColors();

    }

    setRowColors();

  })

})

$().ready(function() {
  $("#about-me-doesnot-ready").on("click", "a", function () {
    var link_text = $(this).text();
    alert(link_text + " section is not finished yet.");
  });

  var image = document.getElementById("linkedin");
  image.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/szymon-gawe%C5%82-51b8b2295/", '_blank');
  });

  var image = document.getElementById("github");
  image.addEventListener("click", function() {
    window.open("https://github.com/gawelszymon/", '_blank');
  });
})

  /*
  $.ajax({
    url: "https://zaworski.pl/examples/www_lab04_ajax.php",
    type: "GET",
    dataType : "text",
  })
    .done(function( data ) {
      console.log("Text received: " + data);
    })
    .fail(function( xhr, status, errorThrown ) {
      alert("Cannot receive data.");
    });


//tutaj wczytuje dane, które następnie będę musiał zamieścić w mojej tabeli
  $.ajax({
    url: "https://zaworski.pl/examples/www_lab04_json.php",
    type: "GET",
    dataType : "text",
  })
    .done(function( data ) {
      console.log("Text received: " + data);
      var json_data = JSON.parse(data);

      jQuery.each(json_data, function() {
        console.log(this.name + " " + this.surname);
      });

      $.each(json_data, function(index, item) {
        $("#table_body").append(
          '<tr>\n' +
          '  <td>' + (index + 6) + '</td>\n' + // Numerowanie wierszy od 1
          '  <td>' + item.name + '</td>\n' +
          '  <td>' + item.surname + '</td>\n' +
          '  <td><button class="removeButton">Remove</button></td>\n' +
          '</tr>'
        );
      });

      $(".removeButton").click(function () {
        alert("Czy na pewno chcesz usunąć ten rekord")
        $(this).closest('tr').remove();
      })

    })

    .fail(function( xhr, status, errorThrown ) {
      alert("Cannot receive data.");
    });


});
*/

/*
  alternatywą dla funkcje tab będzie po prostu wykonanie kodu:

      $("#my-table").hide();

    setTimeout(function() {

        $("#my-table").show(); //<-- jest to wyrażenie jQuery które wywołuje funkcje show na elemencie o id my-table

    }, 5000);
*/

/*
  JSON jest to format danych oparty na obiektach {...} które mogą być zawarte w tablicach [...]
  Mogę również mieć tablice, która składa się z innych tablic.
  Obiekty składają sie z par "klucz" : "wartość" i są oddzielone od siebie przecinakiami
  Klucz jest typu String, a wartość może być dowolnym typem danych.
  JSON to taki lekki format wymiany danych, który jest łatwy do czytania i pisania przez ludzi, a także
  łatwy do analizy i generowania przez maszyny

 */

/*
  Ajax jest to część biblioteki jQuery, dzięki której możemy pobierać dane z innego serwera
  Funkcja .ajax() pozwala na wysyłanie zapytania HTTP do innego adresu iraz na pobranie zwróconej
  do zapytania HTTP odpowiedzi.
  Ajax jest asynchroniczny, to znaczy że po wykonaniu zapytania, zanim dana strona odpowie
  dlasza część kodu javascript jest wykonywana.
  czyli dlatego nieodnosimy sie w innych cześćiach kodu do funkcji .done (zmiennej data) która jest chyba
  callbackiem (czyli funkcją wykonaną po zakonczeniu danej operacji) i ta funnkcja ma obiekt
  data który jest tzw promises (czyli obiktem reprezentującym przyszłe wartosci)

 */







