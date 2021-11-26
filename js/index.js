$(function () {
  pano.on("configloaded", () => {

  })

  pano.on("changenode", () => {
    var booth = ["Teknologi Terapan", "Makanan Minuman", "Produksi & Budidaya", "Jasa & Perdagangan", "Industri Kreatif"]
    if ($.inArray(pano.getNodeTitle(), booth) > -1) {
      remove_frame()
      init_frame()
      replace_frame()
    } else {
      remove_frame()
    }
    animatehotspot()
  })

  pano.on("renderframe", () => {
    distort_frame('brand_atas', 'media/brand_atas.png')
    distort_frame('banner_kiri', 'media/banner_kiri.png')
    distort_frame('banner_kiri', 'media/banner_kiri.png')
    distort_frame('etalase_atas', 'media/etalase_atas.png')
    distort_frame('poster_kiri', 'media/poster_kiri.png')
    distort_frame('poster_kanan', 'media/poster_kanan.png')
    distort_frame('youtube', 'media/youtube.png')
  })

  $('body').prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">')
  $('body').append('<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>')
  $.get("html/modal_test.html", function (data) {
    $('body').prepend(data);
  });
});

function showModal(modal) {
  $('#' + modal + '').modal('toggle')
}

function remove_frame() {
  $('#banner_kiri').remove();
  $('#etalase_atas').remove();
  $('#poster_kiri').remove();
  $('#poster_kanan').remove();
  $('#youtube').remove();
}

function init_frame() {
  $('#container').children().prepend("<h1 id='brand_atas'>brand_atas</h1>")
  $('#container').children().prepend("<h1 id='banner_kiri'>banner_kiri</h1>")
  $('#container').children().prepend("<h1 id='etalase_atas'>etalase_atas</h1>")
  $('#container').children().prepend("<h1 id='poster_kiri'>poster_kiri</h1>")
  $('#container').children().prepend("<h1 id='poster_kanan'>poster_kanan</h1>")
  $('#container').children().prepend("<h1 id='youtube'>youtube</h1>")
}

function replace_frame() {
  $('#banner_kiri').replaceWith("<img id='banner_kiri' src='https://source.unsplash.com/194x171' onclick='showModal('exampleModal')'/>")
  $('#etalase_atas').replaceWith("<iframe id='etalase_atas' width='640' height='320' src='html/display_item.html' style='position: inherit; z-index: 1' frameborder='0' allowfullscreen></iframe>")
  $('#poster_kiri').replaceWith("<iframe id='poster_kiri' width='480' height='720' src='https://www.erikjo.com/' style='position: inherit; z-index: 1' frameborder='0' allowfullscreen></iframe>")
  $('#poster_kanan').replaceWith("<img id='poster_kanan' src='https://source.unsplash.com/102x144' onclick='showModal('exampleModal')' />")
  $('#youtube').replaceWith("<iframe id='youtube' width='136' height='768' src='https://www.youtube.com/embed/geZvRUsVEz8' style='position: inherit; z-index: 1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
}

function distort_frame(e_id, img_src) {
  var value_3d
  value_3d = $("[src='" + img_src + "']").attr("style")
  $('#' + e_id + '').attr({ style: value_3d + 'z-index: 5; transition: none 0s ease 0s; pointer-events: auto' })
}

function animatehotspot() {
  anime({
    targets: '.ht_node',
    scale: 1.5,
    rotateX: [75, 75],
    direction: 'alternate',
    loop: true,
    delay: 300,
    endDelay: 300,
    duration: 1200,
    easing: 'easeInOutQuad'
  })
}