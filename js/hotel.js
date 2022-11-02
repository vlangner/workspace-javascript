
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
});

function reservation(){
    var guest = {
        guestName: $('#name').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        numberofGuests: $('#num').val(),
        roomType: $('#room').val(),
    }
}