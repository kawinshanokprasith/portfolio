
// =====================================

// $(document).ready(function() {
// $(".work-toggle").click(function() {
//     $(".information-show").hide();
//     $(".bio-show").hide();
//     $(".information-toggle").css('color','black');
//     $(".bio-toggle").css('color','black');
//     $(".work-toggle").css('color','white');

    // if ( $("bio-show").hasClass( "hidden" ) ) {
    // $(".work-toggle").text( "Collapse" );
    // } else {
    // $(".work-toggle").text( "Work" );
    // }
    // if ( $("information-show").hasClass( "hidden" ) ) {
    // $(".work-toggle").text( "Collapse" );
    // } else {
    // $(".work-toggle").text( "Work" );
    // }
//     });
// }); 

// $(document).ready(function() {
//     $(".splash").delay(1500).fadeOut(800);
// });

$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});

$(document).ready(function() {
$('container').css('display', 'none');
$('container').fadeIn(1000);

$('.link').click(function() {
event.preventDefault();
newLocation = this.href;
$('container').fadeOut(1000, newpage);
});

function newpage() {
window.location = newLocation;
}
});

$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}


$(document).ready(function() {
    $(".projects-expand").hide();
    $(".information-expand").hide();
    $(".description-expand").hide();
    // $(".smileyface").hide();
});

$(".projects-toggle").click(function() {
    $(".projects-expand").delay(200).fadeToggle(500);
    $(".projects-expand2").delay(200).fadeToggle(500);
    $(".projects-expand").css('color','black')
    $(".projects-expand2").css('color','black')
    $(".projects-toggle").css('color','black')
    $(".information-toggle").css('color','#818185')
    $(".description-toggle").css('color','#818185')
    $(".backtoimages").css('color','#818185')
    $(".gallery").css({'filter':'blur(300px)'})
    $(".projects").css({'filter':'blur(300px)'})
    $(".information-expand").hide();
    $(".description-expand").hide();
    $(".exit-toggle").show();
    $(".backtoimages").show();
    $(".slideButtons").hide();

    // if ( $(".projects-expand").hasClass( "active" ) ) {
    // $(".description-toggle").text( "See Images" );
    // } else {
    // $(".description-toggle").text( "Description" );
    // }
});

// if $('#mokt-last').is(':visible') 

// $('#current-num').html(index);


$(".information-toggle").click(function() {
    $(".information-expand").delay(200).fadeToggle(500);
    $(".information-expand-expand").css('color','black')
    $(".information-toggle").css('color','black')
    $(".projects-toggle").css('color','#818185')
    $(".description-toggle").css('color','#818185')
    $(".backtoimages").css('color','#818185')
    $(".gallery").css({'filter':'blur(300px)'})
    $(".projects").css({'filter':'blur(300px)'})
    $(".projects-expand").hide();
    $(".projects-expand2").hide();
    $(".description-expand").hide();
    $(".exit-toggle").show();
    $(".backtoimages").show();
    $(".slideButtons").hide();
});
   
$(".description-toggle").click(function() {
    $(".description-expand").delay(200).fadeToggle(500);
    $(".description-expand").css('color','black')
    $(".description-toggle").css('color','black')
    $(".information-toggle").css('color','#818185')
    $(".projects-toggle").css('color','#818185')
    $(".backtoimages").css('color','#818185')
    $(".projects-expand").hide();
    $(".projects-expand2").hide();
    $(".information-expand").hide();
    $(".exit-toggle").show();
    $(".gallery").css({'filter':'blur(300px)'})
    $(".backtoimages").show();
    $(".slideButtons").hide();
});

$(".exit-toggle").click(function() {
    $(".gallery").css({'filter':'blur(0px)'})
    $(".projects").css({'filter':'blur(0px)'})
    $(".projects-expand").hide();
    $(".projects-expand2").hide();
    $(".information-expand").hide();
    $(".exit-toggle").hide();
    $(".description-expand").hide();
    $(".backtoimages").hide();
    $(".slideButtons").show();
});

$(".backtoimages").click(function() {
    $(".gallery").css({'filter':'blur(0px)'})
    $(".projects").css({'filter':'blur(0px)'})
    $(".projects-expand").hide();
    $(".projects-expand2").hide();
    $(".information-expand").hide();
    $(".exit-toggle").hide();
    $(".description-expand").hide();
    $(".backtoimages").hide();
    $(".slideButtons").show();
});

// ======== Image Slider ========= //

 var speed = 300;

    $(".prev").click(function() {
        var now = $(this).parent().next("ul.gallery").children(":visible"),
            last = $(this).parent().next("ul.gallery").children(":last"),
            prev = now.prev();
            prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
    });

    $(".next").click(function() {
        var now = $(this).parent().next("ul.gallery").children(':visible'),
            first = $(this).parent().next("ul.gallery").children(':first'),
            next = now.next();
            next = next.index() == -1 ? first : next;
        now.fadeOut(speed, function() {next.fadeIn(speed);});
    });

$("ul.gallery:last-child").onclick(function() {
    window.open('www.youtube.com');
});

//////////////=============//

// var timedelay = 1;
// function delayCheck()
// {
// if(timedelay == 5)
// {
// $('.smileyface').show();
// timedelay = 1;
// }
// timedelay = timedelay+1;
// }
 
// $(document).mousemove(function() {
// $('.smileyface').hide();
// timedelay = 1;
// clearInterval(_delay);
// _delay = setInterval(delayCheck, 500);
// });
// // page loads starts delay timer
// _delay = setInterval(delayCheck, 500)




// $(document).ready(function() {
// $(".bio-toggle").click(function() {
//     $(".bio-show").show();
//     $(".information-show").hide();
//     $(".bio-toggle").css('color','white');
//     $(".information-toggle").css('color','black');
//     $(".work-toggle").css('color','black');

//     if ( $("bio-show").hasClass( "active" ) ) {
//     $(".work-toggle").text( "Work" );
//      } else {
//     $(".work-toggle").text( "Collapse" );
//      }
//  });
// });  

// $(document).ready(function() {
// $(".information-toggle").click(function() {
//     $(".information-show").show();
//     $(".bio-show").hide();
//     $(".information-toggle").css('color','white');
//     $(".work-toggle").css('color','black');
//     $(".bio-toggle").css('color','black');

//     if ( $("information-show").hasClass( "active" ) ) {
//     $(".work-toggle").text( "Work" );
//      } else {
//     $(".work-toggle").text( "Collapse" );
//      }
//  });
// });  

// $(document).ready(function() {
// $(".work-toggle").click(function() {
//     $(".information-show").hide();
//     $(".bio-show").hide();
//     $(".information-toggle").css('color','black');
//     $(".bio-toggle").css('color','black');
//     $(".work-toggle").css('color','white');

//  if ( $("bio-show").hasClass( "hidden" ) ) {
//     $(".work-toggle").text( "Collapse" );
//      } else {
//     $(".work-toggle").text( "Work" );
//      }
//      if ( $("information-show").hasClass( "hidden" ) ) {
//     $(".work-toggle").text( "Collapse" );
//      } else {
//     $(".work-toggle").text( "Work" );
//      }
//  });
// });  