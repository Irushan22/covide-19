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
      });
  });