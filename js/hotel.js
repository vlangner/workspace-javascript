
// for hotel registration
var test = {
    hotelname: "marriot",
    numrooms: 350,
    booked: 120,
    display: function (){
        return this.hotelname;
    }
}

console.log(test.hotelname);
console.log(test.numrooms);

// event
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

var guestGroup = new Array();

function reservation(){
    var guest = {
        guestName: $('#name').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        numberofGuests: $('#numguest').val(),
        roomType: $('#room').val(),
    };

    $("p:first").html("Thank you for your reservation.")
    guestGroup.push(guest); // store in array
    console.log(guestGroup);
}

function displayR(){
    $("form").append("<table>");
    for(var i in guestGroup){
        var currentGuest = guestGroup[i];
        var row = "<tr><td>" + currentGuest.guestName + "</tr></td>" + "<tr><td>" + currentGuest.checkIn + "</tr></td>";
        $("table").append(row);
    }
}