document.documentElement.className+=' js_active ';document.documentElement.className+='ontouchstart'in document.documentElement?' vc_mobile ':' vc_desktop ';(function(){var prefix=['-webkit-','-o-','-moz-','-ms-',""];for(var i in prefix){if(prefix[i]+'transform'in document.documentElement.style)document.documentElement.className+=" vc_transform ";}})();jQuery(window).load(function(){});var vc_js=function(){vc_twitterBehaviour();vc_toggleBehaviour();vc_toggleBehaviourOld();vc_tabsBehaviour();vc_accordionBehaviour();vc_teaserGrid();vc_carouselBehaviour();vc_slidersBehaviour();vc_prettyPhoto();vc_googleplus();vc_pinterest();vc_progress_bar();vc_plugin_flexslider();vc_google_fonts();vc_gridBehaviour();vc_rowBehaviour();jQuery(document).trigger('vc_js');window.setTimeout(vc_waypoints,1500);};jQuery(document).ready(function($){window.vc_js();});if(typeof window['vc_plugin_flexslider']!=='function'){window.vc_plugin_flexslider=function($parent){var $slider=$parent?$parent.find('.wpb_flexslider'):jQuery('.wpb_flexslider');$slider.each(function(){var this_element=jQuery(this);var sliderSpeed=800,sliderTimeout=parseInt(this_element.attr('data-interval'))*1000,sliderFx=this_element.attr('data-flex_fx'),slideshow=true;if(sliderTimeout==0)slideshow=false;this_element.is(':visible')&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:sliderSpeed,smoothHeight:true});});}}
if(typeof window['vc_twitterBehaviour']!=='function'){window.vc_twitterBehaviour=function(){jQuery('.wpb_twitter_widget .tweets').each(function(index){var this_element=jQuery(this),tw_name=this_element.attr('data-tw_name'),tw_count=this_element.attr('data-tw_count');this_element.tweet({username:tw_name,join_text:"auto",avatar_size:0,count:tw_count,template:"{avatar}{join}{text}{time}",auto_join_text_default:"",auto_join_text_ed:"",auto_join_text_ing:"",auto_join_text_reply:"",auto_join_text_url:"",loading_text:'<span class="loading_tweets">loading tweets...</span>'});});}}
if(typeof window['vc_googleplus']!=='function'){window.vc_googleplus=function(){if(jQuery('.wpb_googleplus').length>0){(function(){var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/plusone.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();}}}
if(typeof window['vc_pinterest']!=='function'){window.vc_pinterest=function(){if(jQuery('.wpb_pinterest').length>0){(function(){var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='http://assets.pinterest.com/js/pinit.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();}}}
if(typeof window['vc_progress_bar']!=='function'){window.vc_progress_bar=function(){if(typeof jQuery.fn.waypoint!=='undefined'){jQuery('.vc_progress_bar').waypoint(function(){jQuery(this).find('.vc_single_bar').each(function(index){var $this=jQuery(this),bar=$this.find('.vc_bar'),val=bar.data('percentage-value');setTimeout(function(){bar.css({"width":val+'%'});},index*200);});},{offset:'85%'});}}}
if(typeof window['vc_waypoints']!=='function'){window.vc_waypoints=function(){if(typeof jQuery.fn.waypoint!=='undefined'){jQuery('.wpb_animate_when_almost_visible:not(.wpb_start_animation)').waypoint(function(){jQuery(this).addClass('wpb_start_animation');},{offset:'85%'});}}}
if(typeof window['vc_toggleBehaviourOld']!=='function'){window.vc_toggleBehaviourOld=function(){jQuery(".wpb_toggle").unbind('click').click(function(e){if(jQuery(this).next().is(':animated')){return false;}
if(jQuery(this).hasClass('wpb_toggle_title_active')){jQuery(this).removeClass('wpb_toggle_title_active').next().slideUp(500);}else{jQuery(this).addClass('wpb_toggle_title_active').next().slideDown(500);}});jQuery('.wpb_toggle_content').each(function(index){if(jQuery(this).next().is('h4.wpb_toggle')==false){jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this);}});}}
if(typeof window['vc_toggleBehaviour']!=='function'){window.vc_toggleBehaviour=function($el){var event=function(e){e&&e.preventDefault&&e.preventDefault();var title=jQuery(this);var element=title.closest('.vc_toggle');var content=element.find('.vc_toggle_content');if(element.hasClass('vc_toggle_active')){content.slideUp({duration:300,complete:function(){element.removeClass('vc_toggle_active');}});}else{content.slideDown({duration:300,complete:function(){element.addClass('vc_toggle_active');}});}};if($el){if($el.hasClass('vc_toggle_title')){$el.unbind('click').click(event);}else{$el.find(".vc_toggle_title").unbind('click').click(event);}}else{jQuery(".vc_toggle_title").unbind('click').on('click',event);}}}
if(typeof window['vc_tabsBehaviour']!=='function'){window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery('.wpb_tabs, .wpb_tour'),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split('.'):'1.10',old_version=parseInt(ver[0])==1&&parseInt(ver[1])<9;$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];$tabs=jQuery(this).find('.wpb_tour_tabs_wrapper').tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui);},beforeActivate:function(event,ui){ui.newPanel.index()!==1&&ui.newPanel.find('.vc_pie_chart:not(.vc_ready)');},activate:function(event,ui){wpb_prepare_tab_content(event,ui);}});if(interval&&interval>0){try{$tabs.tabs('rotate',interval*1000);}catch(e){window.console&&window.console.log&&console.log(e);}}
jQuery(this).find('.wpb_tab').each(function(){tabs_array.push(this.id);});jQuery(this).find('.wpb_tabs_nav li').click(function(e){e.preventDefault();if(old_version){$tabs.tabs("select",jQuery('a',this).attr('href'));}else{$tabs.tabs("option","active",jQuery(this).index());}
return false;});jQuery(this).find('.wpb_prev_slide a, .wpb_next_slide a').click(function(e){e.preventDefault();if(old_version){var index=$tabs.tabs('option','selected');if(jQuery(this).parent().hasClass('wpb_next_slide')){index++;}
else{index--;}
if(index<0){index=$tabs.tabs("length")- 1;}
else if(index>=$tabs.tabs("length")){index=0;}
$tabs.tabs("select",index);}else{var index=$tabs.tabs("option","active"),length=$tabs.find('.wpb_tab').length;if(jQuery(this).parent().hasClass('wpb_next_slide')){index=(index+ 1)>=length?0:index+ 1;}else{index=index- 1<0?length- 1:index- 1;}
$tabs.tabs("option","active",index);}});});}}};if(typeof window['vc_accordionBehaviour']!=='function'){window.vc_accordionBehaviour=function(){jQuery('.wpb_accordion').each(function(index){var $this=jQuery(this);var $tabs,interval=$this.attr("data-interval"),active_tab=!isNaN(jQuery(this).data('active-tab'))&&parseInt($this.data('active-tab'))>0?parseInt($this.data('active-tab'))- 1:false,collapsible=active_tab===false||$this.data('collapsible')==='yes';$tabs=$this.find('.wpb_accordion_wrapper').accordion({header:"> div > h3",autoHeight:false,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:true,activate:vc_accordionActivate,change:function(event,ui){if(jQuery.fn.isotope!=undefined){ui.newContent.find('.isotope').isotope("layout");}
vc_carouselBehaviour(ui.newPanel);}});if(true===$this.data('vcDisableKeydown')){$tabs.data('uiAccordion')._keydown=function(){};}});}}
if(typeof window['vc_teaserGrid']!=='function'){window.vc_teaserGrid=function(){var layout_modes={fitrows:'fitRows',masonry:'masonry'};jQuery('.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)').each(function(){var $container=jQuery(this);var $thumbs=$container.find('.wpb_thumbnails');var layout_mode=$thumbs.attr('data-layout-mode');$thumbs.isotope({itemSelector:'.isotope-item',layoutMode:(layout_modes[layout_mode]==undefined?'fitRows':layout_modes[layout_mode])});$container.find('.categories_filter a').data('isotope',$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data('isotope');jQuery(this).parent().parent().find('.active').removeClass('active');jQuery(this).parent().addClass('active');$thumbs.isotope({filter:jQuery(this).attr('data-filter')});});jQuery(window).bind('load resize',function(){$thumbs.isotope("layout");});});}}
if(typeof window['vc_carouselBehaviour']!=='function'){window.vc_carouselBehaviour=function($parent){var $carousel=$parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel");$carousel.each(function(){var $this=jQuery(this);if($this.data('carousel_enabled')!==true&&$this.is(':visible')){$this.data('carousel_enabled',true);var carousel_width=jQuery(this).width(),visible_count=getColumnsCount(jQuery(this)),carousel_speed=500;if(jQuery(this).hasClass('columns_count_1')){carousel_speed=900;}
var carousele_li=jQuery(this).find('.wpb_thumbnails-fluid li');carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});jQuery(this).find('.wpb_wrapper:eq(0)').jCarouselLite({btnNext:jQuery(this).find('.next'),btnPrev:jQuery(this).find('.prev'),visible:visible_count,speed:carousel_speed}).width('100%');var fluid_ul=jQuery(this).find('ul.wpb_thumbnails-fluid');fluid_ul.width(fluid_ul.width()+ 300);jQuery(window).resize(function(){var before_resize=screen_size;screen_size=getSizeName();if(before_resize!=screen_size){window.setTimeout('location.reload()',20);}});}});if(window.Swiper!==undefined){jQuery('.swiper-container').each(function(){var $this=jQuery(this),my_swiper,max_slide_size=0,options=jQuery(this).data('settings');if(options.mode==='vertical'){$this.find('.swiper-slide').each(function(){var height=jQuery(this).outerHeight(true);if(height>max_slide_size)max_slide_size=height;});$this.height(max_slide_size);$this.css('overflow','hidden');}
jQuery(window).resize(function(){$this.find('.swiper-slide').each(function(){var height=jQuery(this).outerHeight(true);if(height>max_slide_size)max_slide_size=height;});$this.height(max_slide_size);});my_swiper=jQuery(this).swiper(jQuery.extend(options,{onFirstInit:function(swiper){if(swiper.slides.length<2){$this.find('.vc_arrow-left,.vc_arrow-right').hide();}else if(swiper.activeIndex===0&&swiper.params.loop!==true){$this.find('.vc_arrow-left').hide();}else{$this.find('.vc_arrow-left').show();}},onSlideChangeStart:function(swiper){if(swiper.slides.length>1&&swiper.params.loop!==true){if(swiper.activeIndex===0){$this.find('.vc_arrow-left').hide();}else{$this.find('.vc_arrow-left').show();}
if(swiper.slides.length- 1===swiper.activeIndex){$this.find('.vc_arrow-right').hide();}else{$this.find('.vc_arrow-right').show();}}}}));$this.find('.vc_arrow-left').click(function(e){e.preventDefault();my_swiper.swipePrev();});$this.find('.vc_arrow-right').click(function(e){e.preventDefault();my_swiper.swipeNext();});my_swiper.reInit();});}}}
if(typeof window['vc_slidersBehaviour']!=='function'){window.vc_slidersBehaviour=function(){jQuery('.wpb_gallery_slides').each(function(index){var this_element=jQuery(this);var ss_count=0,$imagesGrid;if(this_element.hasClass('wpb_slider_nivo')){var sliderSpeed=800,sliderTimeout=this_element.attr('data-interval')*1000;if(sliderTimeout==0)sliderTimeout=9999999999;this_element.find('.nivoSlider').nivoSlider({effect:'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse',slices:15,boxCols:8,boxRows:4,animSpeed:sliderSpeed,pauseTime:sliderTimeout,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,keyboardNav:false,pauseOnHover:true,manualAdvance:false,prevText:'Prev',nextText:'Next'});}
else if(this_element.hasClass('wpb_image_grid')){if(jQuery.fn.imagesLoaded){$imagesGrid=this_element.find('.wpb_image_grid_ul').imagesLoaded(function(){$imagesGrid.isotope({itemSelector:'.isotope-item',layoutMode:'fitRows'});});}else{this_element.find('.wpb_image_grid_ul').isotope({itemSelector:'.isotope-item',layoutMode:'fitRows'});}}});}}
if(typeof window['vc_prettyPhoto']!=='function'){window.vc_prettyPhoto=function(){try{if(jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto){jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:'normal',padding:15,opacity:0.7,showTitle:true,allowresize:true,counter_separator_label:'/',hideflash:false,deeplinking:false,modal:false,callback:function(){var url=location.href;var hashtag=(url.indexOf('#!prettyPhoto'))?true:false;if(hashtag)location.hash="!";},social_tools:''});}}catch(err){window.console&&window.console.log&&console.log(err);}}}
if(typeof window['vc_google_fonts']!=='function'){window.vc_google_fonts=function(){return false;}}
if(typeof window['vc_rowBehaviour']!=='function'){window.vc_rowBehaviour=function(){var $=window.jQuery;var local_function=function(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);var $el_full=$el.next('.vc_row-full-width');var offset=0- $el_full.offset().left- parseInt($el.css('margin-left'));$el.css({'position':'relative','left':offset,'box-sizing':'border-box','width':$(window).width()});if(!$el.data('vcStretchContent')){var padding=(-1*offset);if(padding<0){padding=0;}
$el.css({'padding-left':padding+'px','padding-right':padding+'px'});}});};$(window).unbind('resize.vcRowBehaviour').bind('resize.vcRowBehaviour',local_function);local_function();}}
if(typeof window['vc_gridBehaviour']!=='function'){window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery('[data-vc-grid]').vcGrid();}}
if(typeof window['getColumnsCount']!=='function'){window.getColumnsCount=function(el){var find=false,i=1;while(find==false){if(el.hasClass('columns_count_'+ i)){find=true;return i;}
i++;}}}
var screen_size=getSizeName();function getSizeName(){var screen_size='',screen_w=jQuery(window).width();if(screen_w>1170){screen_size="desktop_wide";}
else if(screen_w>960&&screen_w<1169){screen_size="desktop";}
else if(screen_w>768&&screen_w<959){screen_size="tablet";}
else if(screen_w>300&&screen_w<767){screen_size="mobile";}
else if(screen_w<300){screen_size="mobile_portrait";}
return screen_size;}
function loadScript(url,$obj,callback){var script=document.createElement("script")
script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback();}};}else{}
script.src=url;$obj.get(0).appendChild(script);}
if(typeof window['wpb_prepare_tab_content']!=='function'){window.wpb_prepare_tab_content=function(event,ui){var panel=ui.panel||ui.newPanel,$pie_charts=panel.find('.vc_pie_chart:not(.vc_ready)'),$carousel=panel.find('[data-ride="vc_carousel"]'),$ui_panel,$google_maps;vc_carouselBehaviour();vc_plugin_flexslider(panel);if(ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').length){ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function(){var grid=jQuery(this).data('vcGrid');grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry();});}
if(panel.find('.vc_masonry_media_grid, .vc_masonry_grid').length){panel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function(){var grid=jQuery(this).data('vcGrid');grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry();});}
$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat();$carousel.length&&jQuery.fn.carousel&&$carousel.carousel('resizeAction');$ui_panel=panel.find('.isotope, .wpb_image_grid_ul');$google_maps=panel.find('.wpb_gmaps_widget');if($ui_panel.length>0){$ui_panel.isotope("layout");}
if($google_maps.length&&!$google_maps.is('.map_ready')){var $frame=$google_maps.find('iframe');$frame.attr('src',$frame.attr('src'));$google_maps.addClass('map_ready');}
if(panel.parents('.isotope').length){panel.parents('.isotope').each(function(){jQuery(this).isotope("layout");});}}}
var vc_accordionActivate=function(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find('.vc_pie_chart:not(.vc_ready)'),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');if(jQuery.fn.isotope!=undefined){ui.newPanel.find('.isotope, .wpb_image_grid_ul').isotope("layout");}
if(ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').length){ui.newPanel.find('.vc_masonry_media_grid, .vc_masonry_grid').each(function(){var grid=jQuery(this).data('vcGrid');grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry();});}
vc_carouselBehaviour(ui.newPanel);vc_plugin_flexslider(ui.newPanel);$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat();$carousel.length&&jQuery.fn.carousel&&$carousel.carousel('resizeAction');if(ui.newPanel.parents('.isotope').length){ui.newPanel.parents('.isotope').each(function(){jQuery(this).isotope("layout");});}}};