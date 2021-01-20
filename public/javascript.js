$(function(){
var categories = [
    {
      category: 'les rotations',
      tricks: [
        {
          title: 'Le backflip',
          video: 'iwC-fpnlOL8',
        },
        {
          title: 'Le frontflip',
          video: '88obXjbRtUg',
        },
      ],
    },
    {
      category: 'les classiques',
      tricks: [
        {
          title: 'le flair',
          video: 'MY4DdNtnoLQ',
        },
        {
          title: 'le tailwhip',
          video: 'KjRXfnoqOQQ?start=11',
        },
        {
          title: 'le barspin',
          video: 'GbgCtNakvzo?start=12',
        },
        {
          title: 'le 360',
          video: 'tzyNRlDjNLg?start=8',
        },
        {
          title: 'le brieflip',
          video: 'Mik3PWbibCE?start=10',
        },
        {
          title: 'le frontbri (ou inward)',
          video: 'oHDJCek8IE0',
        },
        {
          title: 'le kickless',
          video: 'CcSykoBpfqc?start=25',
        },
       ],
    },
    {
      category: 'les dingeries',
      tricks: [
        {
          title: 'le triple backflip',
          video: 'i0jmTxoF2PE?start=27',
        },
        {
          title: 'les 10 tailwhip',
          video: 'GXWpc3pRTvM?start=53',
        },
        {
          title: 'le tornado plant',
          video: 'umP30QaYIVc?start=533',
        },
       ],
      },
    ];
  
  
  categories.forEach(function(category) {
    $categoryTemplate = $('#category-template')
      .clone().removeAttr('style').removeAttr('id')
      .appendTo('#categories');
    
    $categoryTemplate.find('.category').text(category.category)
    
    category.tricks.forEach(function(trick) {
      $trickTemplate = $('#trick-template')
        .clone().removeAttr('style').removeAttr('id')
        .appendTo($categoryTemplate.find('.tricks'));
      $trickTemplate.find('.title').text(trick.title)
      $trickTemplate.find('.video').attr('src', 'https://www.youtube.com/embed/'+trick.video)
    });
  });
  
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  