//10秒経過した段階で、上記の処理を上書き、強制終了
setTimeout('endLoading()', 10000);

//ローディング非表示処理
function endLoading(){
  // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
  $('.js-loading img').fadeOut(1000, function(){
    $('.js-loading').fadeOut(800);
  });
}
