import Mock from 'mockjs'

export default {
  list: () => {
    const items = Mock.mock({
      'items|30': [{
        id: '@id',
        title: '@sentence(10, 20)',
        'status|1': ['published', 'draft', 'deleted'],
        'types|1': ['全部', '待付款', '部分支付', '成功', '失败'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
      }]
    })
    return {
      code: 20000,
      data: items,
      total: items.length,
    }
  }
}
