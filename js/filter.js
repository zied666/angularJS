app.filter('showStars',function () {

    return function (input) {
        var stars = "";
        for(var i=0;i<input;i++)
        {
            stars=stars+"*"
        }
        return stars;
    };

});
app.filter('showSigne',function () {

    return function (input) {
        if(input)
            return "%";
        else
            return 'TND';
    };

});