$(document).ready(function () {
    $("#search-btn").click(function () {
        $('#meal').empty();
        var search = $("#search-input").val();
        if (!search) return $('#meal').append('<h6>Not Found! Try again</h6>');
        $.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`, function (data, status) {
            if (data.meals) {
                data.meals
                    .map((item) => {
                        $('#meal').append(
                            `<div class="col-md-3 pb-5">
                                <div class="card">
                                    <img src=${item.strMealThumb} class="card-img-top" alt="img">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.strMeal}</h5>
                                    </div>
                                </div>
                            </div>`
                        )
                    });
            } else {
                $('#meal').append('<h6>Not Found! Try again</h6>');
            }
        });
    });
});













