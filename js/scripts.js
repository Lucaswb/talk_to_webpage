$(document).ready(function() {
  $("button#French").click(function() {
    $("ul#user").prepend("<li>French!</li>");
    $("ul#webpage").prepend("<li>Bonjour, ca va?!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
    });


  $("button#German").click(function() {
    $("ul#user").prepend("<li>German!</li>");
    $("ul#webpage").prepend("<li>Hallo, Wie geht's?!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
    });


  $("button#Spanish").click(function() {
    $("ul#user").prepend("<li>Spanish</li>");
    $("ul#webpage").prepend("<li>Hola, como estas?.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
    });
    $("button#English").click(function() {
      $("ul#user").prepend("<li>English</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
      });


    $("button#Italian").click(function() {
      $("ul#user").prepend("<li>Italian</li>");
      $("ul#webpage").prepend("<li>Ciao!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
      });


    $("button#Russian").click(function() {
      $("ul#user").prepend("<li>Russian</li>");
      $("ul#webpage").prepend("<li>Privet!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
      });

    $("button#Dog").click(function() {
      $("ul#user").prepend("<li>Rruff!</li>");
      $("ul#webpage").prepend("<li>RRrraawwwr!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
      });

    $("button#Cat").click(function() {
      $("ul#user").prepend("<li>Meow!</li>");
      $("ul#webpage").prepend("<li>Bark!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
      });
});
