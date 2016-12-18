//jQuery도 기본적으로 제공하는 API가 있다.
//조원 정연훈이 하였습니다.

$(function() {
  //city라는 이름을 가는 form에 입력값이 있는지 확인한다.
  $('#city').keyup(function() {
    var query = $('#city').val() || "";
    query = query.trim();
    console.log(query);
    if (!query) {
      return; // typing한 내용이 없으면 종료
    }

    $.ajax({
      url: '/suggest',
      data: {city: query},
      success: function(data) {
        // Ajax의 결과를 잘 받았을 때
        // 화면에 받은 결과를 가지고 list를 rendering하고
        var els = _.map(data, function(name) {
          return '<li>' + name + '</li>';
        });
        $('.suggest-box').html(els.join('\n')).show();//suggest-box에 해당하는 도시들을 보여준다.

        // li item(자동완성된 도시들)을 클릭했을 때, text box의 내용을 바꾸고, suggest-box감춤
        $('.suggest-box li').click(function(e) {
          $('#city').val($(e.currentTarget).text());
          $('.suggest-box').hide();
        });
      },
    });
  });
});