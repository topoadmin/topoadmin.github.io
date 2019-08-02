FastClick.attach(document.body)

/* 返回数据 */
function getGallery() {
	const r = 'src/img/case/'
	return [
		{
			name: 'net',
			title: '互联网',
			data: [{
				href: 'http://guozhivip.com/rank/',
				title: '果汁排行榜',
				desc: '全网最全榜单',
				address: 'CN',
				type: '互联网',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/H6a347d40ed2b4a9f909a00ecf0558715l.png'
			}, {
				href: 'https://www.anyknew.com/',
				title: 'AnyKnew | 效率资讯',
				desc: '各网站的新闻资讯聚合排名',
				address: 'CN',
				type: '互联网',
				date: '2019-7-28 20:53:59',
				img: 'https://f0cdn.anyknew.com/static/anyknew-b.png'
			}, {
				href: 'https://mirrors.tuna.tsinghua.edu.cn/',
				title: '清华大学开源软件镜像站',
				desc: '致力于为国内和校内用户提供高质量的开源软件镜像、Linux镜像源服务，帮助用户更方便地获取开源软件。本镜像站由清华大学TUNA团队负责维护。',
				address: 'CN',
				type: '互联网',
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
				address: 'CN',
				type: '设计',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/Hd894fbabe656456fa2120f3372d1d118d.jpg'
			}, {
				href: 'https://www.gaoding.com/tools',
				title: '稿定设计',
				desc: '提供抠图、拼图、装修等设计工具，让你的设计工作更加轻松',
				address: 'CN',
				type: '设计',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/H641c4ae766c545b3b55107e63d25dc38q.jpg'
			}, {
				href: 'https://www.islide.cc/',
				title: 'iSlide',
				desc: '包含38个设计辅助功能，8大在线资源库超20万专业PPT素材',
				address: 'CN',
				type: '设计',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/H4a02bbfe6f1d456e94fbc95d536cfca89.jpg'
			}, {
				href: 'https://www.chuangkit.com/',
				title: '创客贴',
				desc: '平面设计工具 | 涵盖海报、新媒体营销、印刷物料、工作文档、电商、生活等',
				address: 'CN',
				type: '设计',
				date: '2019-7-28 20:53:59',
				img: 'https://www.chuangkit.com/distweb/img/logo-colored-2019.11081299.svg'
			}, {
				href: 'https://www.lifeofpix.com/',
				title: 'Life of pix',
				desc: '免费高分辨率摄影',
				address: 'US',
				type: '设计',
				date: '2019-08-02 15:36:31',
				img: 'https://ae01.alicdn.com/kf/H73921da6ca7b475194061ec287d7c30fB.jpg'
			}, {
				href: 'https://www.piqsels.com/zh/',
				title: 'piqsels',
				desc: '基于CC0协议的免版税图库，个人和商业免费使用，无需归属',
				address: 'US',
				type: '设计',
				date: '2019-08-02 15:41:40',
				img: 'https://ae01.alicdn.com/kf/H6db188278d944861a2d8aae28e42559cO.jpg'
			}, {
				href: 'https://www.pexels.com/',
				title: 'pexels',
				desc: '分享的免费图片和视频',
				address: 'US',
				type: '设计',
				date: '2019-08-02 15:55:14',
				img: 'https://ae01.alicdn.com/kf/H2fd22fba898949c997fd2c66a541427c6.jpg'
			}, {
				href: 'https://magdeleine.co/',
				title: 'Magdeleine',
				desc: '为您每天精心挑选的免费照片',
				address: 'DE',
				type: '设计',
				date: '2019-08-02 16:01:31',
				img: 'https://ae01.alicdn.com/kf/Hd7e4b06c539f4b8d966dde91f2b93324x.jpg'
			}
			]
		},
		{
			name: 'tools',
			title: '工具',
			data: [{
					href: 'https://www.ghpym.com/',
					title: '果核剥壳',
					desc: '各种绿色破解版软件资源站',
					address: 'CN',
					type: '工具',
					date: '2019-7-28 20:53:59',
					img: 'https://www.ghpym.com/wp-content/uploads/2019/01/ghlogonew.png'
				},
				{
					href: 'https://www.superbed.cn/',
					title: '聚合图床',
					desc: '免费的图片存储、CDN分发网站',
					address: 'CN',
					type: '工具',
					date: '2019-7-28 20:53:59',
					img: 'https://ae01.alicdn.com/kf/Hf22dc2fbb292444cb6a851a57ca6d6cab.jpg'
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
				address: 'CN',
				type: '企业',
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
					address: 'JP',
					type: '电子商务',
					date: '2019-7-29 11:30:00',
					img: 'https://ae01.alicdn.com/kf/H92563bb0900c4e759dcac515a472afb9F.jpg'
				},
				{
					href: 'https://www.opera-net.jp/',
					title: 'opera',
					desc: '错位美 | 卖口红的',
					address: 'JP',
					type: '电子商务',
					date: '2019-7-29 12:41:28',
					img: 'https://ae01.alicdn.com/kf/Hd24155f483e64a36aaf847da9e407d98B.png'
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
				address: 'CN',
				type: '建站',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/H76922d220d2c4d8ab99ee15346f32100t.jpg'
			}, {
				href: 'https://www.shuwon.com/',
				title: '成都蜀美',
				desc: '创造品牌视觉体验 | IT能力赋能运营',
				address: 'CN',
				type: '建站',
				date: '2019-7-28 20:53:59',
				img: 'https://ae01.alicdn.com/kf/H25e0d686ab4e40f591b52d6588df177an.jpg'
			}]
		},
		{
			name: 'admin',
			title: '后台模板',
			data: [{
				href: 'http://themedesigner.in/demo/admin-press/main/index.html',
				title: 'admin-press',
				desc: '个人非常喜欢这套UI',
				address: 'IN',
				type: '后台模板',
				date: '2019-7-29 16:39:22',
				img: 'https://ae01.alicdn.com/kf/Hb44773289b114aa1ab9a43fead1af9950.jpg'
			}]
		}
	]
}

/* 返回国家中英对照 */
const ADDRESSOBJ = {
	JP: '日本',
	IN: '印度',
	CN: '中国',
	CA: '加拿大',
	DE: '德国',
	FR: '法国',
	US: '美国',
	UK: '英国'
}
/* 数据字段解释 */
const GALLERYOBJ = {
	'type': '类型',
	'title': '名称',
	'desc': '描述',
	'address': '国家'
}
const GALLERYOBJCN = {
	'类型': 'type',
	'名称': 'title',
	'描述': 'desc',
	'国家': 'address'
}

const ACOLORS = [244, 124, 72, 1]
const ACOLOR = 'rgba(' + ACOLORS.join() +  ')'
const BCOLORS = [255, 255, 255, 1]
const BCOLOR = 'rgba(' + BCOLORS.join() +  ')'


Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: '/src/img/load.gif',
	loading: '/src/img/load.gif',
	attempt: 1
})
		
/* 渲染数据 */
const vueModel = new Vue({
	el: '#app',
	data() {
		const gallery = getGallery()
		const arr = []
		gallery.forEach(item => {
			if ($.isArray(item.data) && item.data.length) {
				arr.push(...item.data)
			}
		})
		this.__allGallery = arr
		
		const newest = {
			name: 'newest',
			title: '最新',
			data: arr.sort((x, y) => {
				return new Date(y.date).getTime() - new Date(x.date).getTime()
			}).filter((item, index) => index < 12)
		}
		gallery.unshift(newest)
		
		return {
			searchRes: [],
			searchAlert: false,
			gallery,
			mode: 'th'
		}
	},
	mounted() {
		initFn.bind(this)()
	},
	methods: {
		filterRes(res) { // 对比查询结果，得到真正的渲染数据
			const nRes = []
			res.forEach(item => {
				const filterRes = this.__allGallery.filter(fItem => {
					if (item.value) {
						return fItem[GALLERYOBJCN[item.group]] == item.value
					} else {
						return fItem[GALLERYOBJCN[item.group]] == item.name
					}
				})
				nRes.push(...filterRes)
			})
			
			return {
				name: 'newest',
				random: Date.now(),
				title: '搜索结果',
				data: nRes
			}
		},
		query($typeahead) { // 查询事件
			const value = $('#search-input').val()
			if (value) {
				const empty = $typeahead.resultHtml.hasClass('empty')	// 搜索结果为空
				if (!empty) {
					let filterRes = {}
					if ($typeahead.item) { // 选择了详细内容
						filterRes = this.filterRes([$typeahead.item])
					} else if ($typeahead.result) { // 没有选择详细内容，但是存在搜索结果
						filterRes = this.filterRes($typeahead.result)
					}
					this.setSearchRes(filterRes)
					return false
				}
			}
			this.searchAlertOpen()
			return false
		},
		setSearchRes(filterRes) { // 生成查询结果
			_.remove(this.gallery, ri => {
				return ri.name === 'newest'
			})
			this.gallery.unshift(filterRes)
			
			this.$nextTick(() => {
				this.galleryNavSwiper.update()
				this.galleryNavSwiper.slides.css('color', BCOLOR)
				this.gallerySwiper.update()
				this.gallerySwiper.lazy.load()
				setTimeout(() => {
					this.gallerySwiper.slideTo(0)
					this.galleryNavSwiper.slides.eq(0).css('color', ACOLOR)
				}, 0)
			})
		},
		hanlderTag(type, value) {
			const filterRes = this.filterRes([{
				name: value,
				group: GALLERYOBJ[type]
			}])
			this.setSearchRes(filterRes)
		},
		searchAlertOpen() {
			this.searchAlert = true
			setTimeout(() => {
				this.searchAlert = false
			}, 3000)
		}
	}
})

// 初始化页面
function initFn() {
	const __this = this // Vue实例
	const tSpeed = 300
	let clientWidth // 当前页面 Nav 的宽度（不包含隐藏）
	let navWidth // 总 Nav 宽度（包含隐藏）
	let navSlideWidth // 一个Nav的宽度
	let navSum // 最后一个slide的位置
	let bar // 导航

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
				swiper.slides.eq(swiper.activeIndex).css('color', ACOLOR)
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
		// lazy: {
		// 	loadPrevNext: true
		// },
		autoHeight: true,
		on: {
			init() {
				const activeIndex = this.activeIndex
				galleryNavSwiper.slides.eq(activeIndex).css('color', ACOLOR)
			},
			touchMove() {
				const progress = this.progress
				bar.transition(0)
				bar.transform('translateX(' + navSum * progress + 'px)')
				for (i = 0; i < this.slides.length; i++) {
					slideProgress = this.slides[i].progress
					if (Math.abs(slideProgress) < 1) {
						r = Math.floor((ACOLORS[0] - BCOLORS[0]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + BCOLORS[0])
						g = Math.floor((ACOLORS[1] - BCOLORS[1]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + BCOLORS[1])
						b = Math.floor((ACOLORS[2] - BCOLORS[2]) * (1 - Math.pow(Math.abs(slideProgress), 2)) + BCOLORS[2])
						galleryNavSwiper.slides.eq(i).css('color', 'rgba(' + r + ',' + g + ',' + b + ', ' + BCOLORS[3] + ' )')
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
				galleryNavSwiper.slides.eq(activeIndex).css('color', ACOLOR)
				if (activeIndex > 0) {
					galleryNavSwiper.slides.eq(activeIndex - 1).transition(tSpeed)
					galleryNavSwiper.slides.eq(activeIndex - 1).css('color', BCOLOR)
				}
				if (activeIndex < this.slides.length) {
					galleryNavSwiper.slides.eq(activeIndex + 1).transition(tSpeed)
					galleryNavSwiper.slides.eq(activeIndex + 1).css('color', BCOLOR)
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
		this.slides.css('color', BCOLOR)
		this.slides.eq(index).css('color', ACOLOR)
		gallerySwiper.slideTo(index)
	})
	
	this.galleryNavSwiper = galleryNavSwiper
	this.gallerySwiper = gallerySwiper
	
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
	
	const titleList = []
	const descList = []
	const addressList = []
	
	__this.__allGallery.forEach(item => {
		titleList.push({ name: item.title })
		descList.push({ name: item.desc })
		addressList.push({
			name: ADDRESSOBJ[item.address],
			value: item.address
		})
	})
	const source = {}
	source[GALLERYOBJ.address] = {
		display: ['name', 'value'],
		data: _.uniqBy(addressList, 'name'),
		template: '<span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-{{value}}"></use></svg><span class="pl-2 pr-2">{{name}}</span><small>{{value}}</small></span>'
	}
	source[GALLERYOBJ.title] = {
		display: ['name', 'value'],
		data: _.uniq(titleList)
	}
	source[GALLERYOBJ.desc] = {
		display: ['name', 'value'],
		data: _.uniq(descList)
	}
	
	const $searchInput = $('#search-input')
	const $typeahead = $.typeahead({
		input: $searchInput,
		minLength: 0,
		maxItem: 100,
		// maxItemPerGroup: 5,
		group: {
			template: "{{group}}"
		},
		backdrop: {
			"background-color": "#fff"
		},
    searchOnFocus: true,
		dropdownFilter: "所有内容",
		emptyTemplate: '没有结果 "{{query}}"',
		selector: {
			list: "typeahead__list header-search-list"
		},
		source,
		callback: {
			onClickAfter() {
				__this.query($typeahead)
			},
			onSubmit () {
				__this.query($typeahead)
			}
		},
		debug: true
	})
}
