/* 返回数据 */
function getGallery() {
	const r = 'src/img/case/'
	return [{
			name: 'net',
			title: '互联网',
			data: [{
				href: 'http://guozhivip.com/rank/',
				title: '果汁排行榜',
				desc: '全网最全榜单',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'guozhivip.jpg'
			}, {
				href: 'https://www.anyknew.com/',
				title: 'AnyKnew | 效率资讯',
				desc: '各网站的新闻资讯聚合排名',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: 'https://f0cdn.anyknew.com/static/anyknew-b.png'
			}, {
				href: 'https://mirrors.tuna.tsinghua.edu.cn/',
				title: '清华大学开源软件镜像站',
				desc: '致力于为国内和校内用户提供高质量的开源软件镜像、Linux镜像源服务，帮助用户更方便地获取开源软件。本镜像站由清华大学TUNA团队负责维护。',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: 'https://mirrors.tuna.tsinghua.edu.cn/static/img/logo-small@3x.png'
			}]
		},
		{
			name: 'design',
			title: '设计',
			data: [{
				href: 'https://myslide.cn/',
				title: 'MySlide',
				desc: '一个提供PPT分享服务的平台，在这里你可以找到你想要的PPT',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'my-slide.jpg'
			}, {
				href: 'https://www.gaoding.com/tools',
				title: '稿定设计',
				desc: '提供抠图、拼图、装修等设计工具，让你的设计工作更加轻松',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'gaoding.jpg'
			}, {
				href: 'https://www.islide.cc/',
				title: 'iSlide',
				desc: '包含38个设计辅助功能，8大在线资源库超20万专业PPT素材',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'islide.jpg'
			}, {
				href: 'https://www.chuangkit.com/',
				title: '创客贴',
				desc: '平面设计工具 | 涵盖海报、新媒体营销、印刷物料、工作文档、电商、生活等',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: 'https://www.chuangkit.com/distweb/img/logo-colored-2019.11081299.svg'
			}]
		},
		{
			name: 'tools',
			title: '工具',
			data: [{
					href: 'https://www.ghpym.com/',
					title: '果核剥壳',
					desc: '各种绿色破解版软件资源站',
					address: 'cn',
					date: '2019-7-28 20:53:59',
					img: 'https://www.ghpym.com/wp-content/uploads/2019/01/ghlogonew.png'
				},
				{
					href: 'https://www.superbed.cn/',
					title: '聚合图床',
					desc: '免费的图片存储、CDN分发网站',
					address: 'cn',
					date: '2019-7-28 20:53:59',
					img: r + 'superbed.jpg'
				}
			]
		},
		{
			name: 'corp',
			title: '企业',
			data: [{
				href: 'http://www.uinnova.cn/',
				title: 'uinnova | 优锘科技',
				desc: '运维和物联网可视化应用平台',
				address: 'cn',
				date: '2019-7-28 20:30:00',
				img: 'http://www.uinnova.cn/0e93fe49da54ec4ec688e1047caf643c.png'
			}]
		},
		{
			name: 'ec',
			title: '电子商务',
			data: [{
					href: 'http://8ya.jp/',
					title: '八屋',
					tag: '餐饮',
					desc: '简洁美 | 卖茶的',
					address: 'jp',
					date: '2019-7-29 11:30:00',
					img: r + '8wu.jpg'
				},
				{
					href: 'https://www.opera-net.jp/',
					title: 'opera',
					desc: '错位美 | 卖口红的',
					address: 'jp',
					date: '2019-7-29 12:41:28',
					img: r + 'opera.jpg'
				}
			]
		},
		{
			name: 'bolg',
			title: '个人'
		},
		{
			name: 'site',
			title: '建站',
			data: [{
				href: 'http://teamthink.cn/',
				title: 'Teamthink',
				desc: '帮助客户成就伟大的品牌',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'teamthink.jpg'
			}, {
				href: 'https://www.shuwon.com/',
				title: '成都蜀美',
				desc: '创造品牌视觉体验 | IT能力赋能运营',
				address: 'cn',
				date: '2019-7-28 20:53:59',
				img: r + 'shuwon.jpg'
			}]
		},
		{
			name: 'admin',
			title: '后台模板',
			data: [{
				href: 'http://themedesigner.in/demo/admin-press/main/index.html',
				title: 'admin-press',
				desc: '个人非常喜欢这套UI',
				address: 'in',
				date: '2019-7-29 16:39:22',
				img: r + 'admin-press.jpg'
			}]
		}
	]
}

/* 渲染数据 */
const vueModel = new Vue({
	el: '#app',
	data: function() {
		const gallery = getGallery()
		const arr = []
		gallery.forEach(item => {
			if ($.isArray(item.data) && item.data.length) {
				const nArr = item.data.map(row => {
					row.type = item.title
					return row
				})
				arr.push(...nArr)
			}
		})
		
		const newest = {
			name: 'newest',
			title: '最新',
			data: arr.sort((x, y) => {
				return new Date(y.date).getTime() - new Date(x.date).getTime()
			}).filter((item, index) => index < 12)
		}
		gallery.unshift(newest)
		
		return {
			search: {
				text: ''
			},
			searchAlert: false,
			gallery,
			mode: 'th'
		}
	},
	mounted() {
		initFn.bind(this)()
	},
	methods: {
		query() {
			this.searchAlert = true
			setTimeout(() => {
				this.searchAlert = false
			}, 3000)
			return false
		}
	}
})

// 初始化页面
function initFn() {
	FastClick.attach(document.body)
	
	const __this = this // Vue实例
	const tSpeed = 300
	let clientWidth // 当前页面 Nav 的宽度（不包含隐藏）
	let navWidth // 总 Nav 宽度（包含隐藏）
	let navSlideWidth // 一个Nav的宽度
	let navSum // 最后一个slide的位置
	let bar // 导航
	const aColors = [244, 124, 72, 1]
	const aColor = 'rgba(' + aColors.join() +  ')'
	const bColors = [255, 255, 255, 1]
	const bColor = 'rgba(' + bColors.join() +  ')'

	const navSwiperInit = function(swiper) {
		navSlideWidth = swiper.slides.eq(0).css('width')
		bar = swiper.$el.find('.bar')
		bar.css('width', navSlideWidth)
		bar.transition(tSpeed)
		navSum = swiper.slides[swiper.slides.length - 1].offsetLeft
		clientWidth = parseInt(swiper.$wrapperEl.css('width'))

		navWidth = 0
		for (i = 0; i < swiper.slides.length; i++) {
			navWidth += parseInt(swiper.slides.eq(i).css('width'))
		}
		setTimeout(function() {
			if (gallerySwiper.active == swiper.activeIndex) {
				swiper.slides.eq(swiper.activeIndex).css('color', aColor)
			}
		}, 0)
	}

	const galleryNavSwiper = new Swiper('#gallery-nav>.swiper-container', {
		slidesPerView: __this.gallery.length > 10 ? 10 : __this.gallery.length,
		watchSlidesProgress: true,
		freeMode: true,
		roundLengths: true,
		breakpoints: {
			992: {
				slidesPerView: 8
			},
			768: {
				slidesPerView: 6
			},
			576: {
				slidesPerView: 5
			}
		},
		on: {
			init() {
				navSwiperInit(this)
			}
		}
	})

	const gallerySwiper = new Swiper('#gallery-box>.swiper-container', {
		watchSlidesProgress: true,
		resistanceRatio: 0,
		roundLengths: true,
		// hashNavigation: true,
		lazy: {
			loadPrevNext: true
		},
		autoHeight: true,
		on: {
			touchMove() {
				const progress = this.progress
				bar.transition(0)
				bar.transform('translateX(' + navSum * progress + 'px)')
				for (i = 0; i < this.slides.length; i++) {
					slideProgress = this.slides[i].progress
					if (Math.abs(slideProgress) < 1) {
						r = Math.floor((aColors[0] - bColors[0]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + bColors[0])
						g = Math.floor((aColors[1] - bColors[1]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + bColors[1])
						b = Math.floor((aColors[2] - bColors[2]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + bColors[2])
						galleryNavSwiper.slides.eq(i).css('color', 'rgba(' + r + ',' + g + ',' + b + ', ' + bColors[3] + ' )')
					}
				}
			},
			transitionStart() {
				const activeIndex = this.activeIndex
				const activeSlidePosition = galleryNavSwiper.slides[activeIndex].offsetLeft
				// 释放时导航粉色条移动过渡
				bar.transition(tSpeed)
				bar.transform('translateX(' + activeSlidePosition + 'px)')
				// 释放时文字变色过渡
				galleryNavSwiper.slides.eq(activeIndex).transition(tSpeed)
				galleryNavSwiper.slides.eq(activeIndex).css('color', aColor)
				if (activeIndex > 0) {
					galleryNavSwiper.slides.eq(activeIndex - 1).transition(tSpeed)
					galleryNavSwiper.slides.eq(activeIndex - 1).css('color', bColor)
				}
				if (activeIndex < this.slides.length) {
					galleryNavSwiper.slides.eq(activeIndex + 1).transition(tSpeed)
					galleryNavSwiper.slides.eq(activeIndex + 1).css('color', bColor)
				}
				// 导航居中
				if (navWidth > clientWidth) {
					navActiveSlideLeft = galleryNavSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离
					galleryNavSwiper.setTransition(tSpeed)
					if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
						galleryNavSwiper.setTranslate(0)
					} else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
						galleryNavSwiper.setTranslate(clientWidth - navWidth)
					} else {
						galleryNavSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
					}
				}
			}
		}
	})

	galleryNavSwiper.$el.on('touchstart', function(e) {
		e.preventDefault()
	})

	galleryNavSwiper.on('tap', function(e) {
		const index = this.clickedIndex
		gallerySwiper.slideTo(index)
		const clickSlide = this.slides.eq(index)
		this.slides.find('span').css('color', bColor)
		clickSlide.find('span').css('color', aColor)
	})
	
	$(window).on('resize', _.debounce(_ => navSwiperInit(galleryNavSwiper), 150))
	
	const $h = $('html, body')
	const $doc = $(document)
	const $topBtn = $('#go-top')
	const $body = $('body')

	$topBtn.on('click', function() {
		$h.animate({
			scrollTop: 0
		}, {
			duration: 300,
			easing: 'swing'
		})
	})

	topBtnShow()
	$(window).on('scroll', _.debounce(_ => topBtnShow(), 30))

	function topBtnShow() {
		if ($doc.scrollTop() == 0) {
			$topBtn.fadeOut()
			$body.removeClass('scroll')
		} else {
			$topBtn.fadeIn()
			$body.addClass('scroll')
		}
	}

	$('#reorder').on('click', function() {
		if (vueModel) {
			vueModel.mode = vueModel.mode === 'list' ? 'th' : 'list'
		}
	})
}
