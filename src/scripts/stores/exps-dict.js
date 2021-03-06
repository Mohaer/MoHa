let expsDict = {
  // Chinese => Chinese
  '最': '坠',
  '好的': '吼滴',
  '好啊': '吼哇',
  '着急': '拙计',
  '粉丝': '膜法师',
  '支持|赞同': '兹瓷',
  '批评|指责|责备': '批判',
  '招惹|冒犯|挑衅': '得罪',
  '差错|错误|过失': '偏差',
  '赚钱|获利': '闷声发大财',
  '印点|内定[^钦点]': '钦点',
  '经验(丰富|多)': '身经百战',
  '(过来|老)(司机|人)': '长者',
  '人生(哲学|哲理)': '人生经验',
  '(绝对|肯定)(啦|呀)': '当然啦',
  '知不知道｜晓不晓得': '识得唔识得',
  '谈话|闲聊｜聊天|交流': '谈笑风生',
  '(见识|阅历)(丰富|多|广)': '见得多了',
  '不予置评|拒绝(回答|评论)': '无可奉告',
  '(坠|很|相当|非常)快': '比香港记者还快',
  '(按|讲)(原则|准则|规则|道理)': '讲基本法',
  '胡说|乱说|信口胡言|瞎扯|瞎说|胡扯': '一派胡言',
  '制造舆论|哗众取宠|一本道|故弄玄虚|夸大其词': '搞个大新闻',
  '(到|去|游览)过(许|很)多(地方|城市|国家)': '哪一个国家我没有去过',
  '233(3*)': (find, $1) => {
    let multiH = $1.replace(/3/g, 'h')
    return `hhh${multiH}`
  },
  '(呵|哈|嘻*)': (find, $1) => {
    let multiH = $1.replace(/./g, '蛤')
    return `${multiH}`
  },

  // Chinese => English
  '我很生气': 'I\'m angry',
  '天真(的^|了?)': ' naive',
  '(太|很|非常?)年轻(的^|了?)': 'too young',
  '(太|很|非常?)简单(的^|了?)': 'too simple',
  '有(些|的?)时(候?)': 'sometimes',

  // English => English
  "great": 'excited'
}

export default expsDict
