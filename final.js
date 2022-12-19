$("button").click(function(){
$.get("https://api.spoonacular.com/recipes/findByIngredients", function(data,status){
    console.log(status);
      console.log(data);
      results = data['message']
          console.log(results);

      });
});

















