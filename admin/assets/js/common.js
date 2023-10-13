//전체 메뉴
const navAllBtn = document.querySelector('.nav_all_btn');
const navCloseBtn = document.querySelector('.nav_close');
const nav = document.querySelector('#nav');
navAllBtn.addEventListener('click', function () {
	nav.classList.toggle('active');
	navAllBtn.classList.toggle('active');
});
navCloseBtn.addEventListener('click', function () {
	nav.classList.remove('active');
	navAllBtn.classList.remove('active');
});
const body = document.querySelector('body');
body.addEventListener('click', function (event) {
	if (event.target.closest('.hd_bottom') || event.target.closest('#nav') || event.target.closest('.nav_all_btn')) {
		return;
	}
	nav.classList.remove('active');
	navAllBtn.classList.remove('active');
});


//푸터 family sites
$(".family_sites_open").on("click", function(e) {
	e.stopPropagation();
	$(this).toggleClass("active");
	$(".sites").toggle();
});
$(document).on("click", function(event) {
	var $trigger = $(".family_sites");
	if($trigger !== event.target && !$trigger.has(event.target).length) {
		$(".family_sites_open").removeClass("active");
		$(".sites").hide();
	}    
});

//상단으로 버튼
$('.to_top').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.to_top').fadeIn();
	} else {
		$('.to_top').fadeOut();
	}
});

//fixed 박스
$('.r_cs_toggle').click(function(){
	$(this).toggleClass('active');
	$('.cs_list').slideToggle();
});

let elementPosition = 360;
$(window).scroll(function() {
	if ($(window).scrollTop() >= elementPosition - 40) { 
		$('.rside_wrap').addClass('fixed');
	} else {
		$('.rside_wrap').removeClass('fixed');
	}
});



//데이트픽커
// Datepicker 옵션 설정
$.datepicker.setDefaults({
	dateFormat: 'yy.mm.dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
});

// Datepicker 적용
$(".datepicker").each(function () {
	if ($(this).hasClass('select_yymm')) {
		// select_yymm 클래스가 있는 경우 연월 셀렉트박스로 변경
		$(this).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'yy.mm.dd',
			beforeShow: function (input, inst) {
				if ($(input).hasClass('select_yymm')) {
					inst.dpDiv.addClass('datepicker_select_yymm');
				}
			}
		});
	} else {
		// select_yymm 클래스가 없는 경우 기본 datepicker 적용
		$(this).datepicker({
			showOtherMonths: true,
			yearSuffix: '.',
			dateFormat: 'yy.mm.dd',
			selectOtherMonths: true,
			beforeShow: function (input, inst) {
				if (!$(input).hasClass('select_yymm')) {
					inst.dpDiv.removeClass('datepicker_select_yymm');
				}
			}
		});
	}
});


//체크박스 전체 체크 
document.querySelectorAll('.label_control').forEach(function (labelControl) {
	labelControl.addEventListener('change', function (event) {
		const target = event.target;
		if (target.matches('input[type="checkbox"]') && target.classList.contains('check_all')) {
			const isChecked = target.checked;
			const checkboxes = labelControl.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(function (checkbox) {
				checkbox.checked = isChecked;
			});
			if (!isChecked) {
				target.checked = false; // check_all 비활성화
			}
		} else if (target.matches('input[type="checkbox"]:not(.check_all)') && !target.checked) {
			const checkAllCheckbox = labelControl.querySelector('.check_all');
			if (checkAllCheckbox) {
				checkAllCheckbox.checked = false; // check_all 비활성화
			}
		}
	});
});


//레이어 text 
function msgShow(elm, duration){ //선택자, 유지 시간
    $(elm).fadeIn(function(){
        setTimeout(function(){
            $(elm).fadeOut();
        }, duration);
    });
}
