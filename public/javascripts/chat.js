//채팅기능을 위한 제이쿼리
//web socket API가 있다. 이걸 이용하면 된다.
//web socket은 TCP 기반의 양방향 통신 프로토콜
$(function() {
  var template = _.template($('#template').html());
  var name = prompt('닉네임을 입력해주세요.');
  var socket = io({
    upgrade: false,
    transports: ['websocket']
  });
  $('#name').val(name);
  socket.emit('join', name);
  socket.on('chat', function(data) {
    data.type = (data.from === name)? 'mine' : 'others';
    $('#messages').append(template(data));
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  socket.on('dm', function(data) {
    data.type = 'direct';
    $('#messages').append(template(data));
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  })
  socket.on('join', function(name) {
    if (name) {
      $('#messages').append("<li><span class='text'>" + name + "님이 접속하셨습니다.</span></li>");
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }
  });

  socket.on('left', function(name) {
    if (name) {
      $('#messages').append("<li><span class='text'>" + name + "님이 나갔습니다.</span></li>");
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }
  });

  //client -> server로 메세지를 전송한다.
  //client에서 메세지 emit
  $('form').submit(function() {
    socket.emit('chat', {from: name, message: $('#m').val()});
    $('#m').val('').focus();
    return false;
  });
  $('#m').focus();
});