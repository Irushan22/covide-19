$(document).ready(function(){
      $.get("https://hpb.health.gov.lk/api/get-current-statistical", function(result){
        console.log(result);
        var local_active_cases = result.data.local_active_cases;
        var local_deaths = result.data.local_deaths;
        var local_new_cases = result.data.local_new_cases;
        var local_new_deaths = result.data.local_new_deaths;
        var local_recovered = result.data.local_recovered;
        var local_total_cases = result.data.local_total_cases;
        var local_total_number_of_individuals_in_hospitals = result.data.local_total_number_of_individuals_in_hospitals;
        var total_pcr_testing_count = result.data.total_pcr_testing_count;
        console.log(local_total_cases);
        $("#local_total_cases").text(local_total_cases);
        $("#local_total_cases").text(local_total_cases);
        $("#local_deaths").text(local_deaths);
        $("#local_new_deaths").text(local_new_deaths);
        $("#total_pcr_testing_count").text(total_pcr_testing_count);
        $("#local_active_cases").text(local_active_cases);
        $("#local_recovered").text(local_recovered);
        $("#suspected").text(local_total_number_of_individuals_in_hospitals);
        // local_total_cases = $("#demo").html();
        // document.getElementById("demo").innerHTML = local_total_cases;
      });


//     $('.count').each(function () {
//       $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 1000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

  });