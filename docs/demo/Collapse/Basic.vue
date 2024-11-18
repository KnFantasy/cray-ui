<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';

const collapseRef = ref(['a'])
</script>

<template>
  <Collapse v-model="collapseRef">
    <CollapseItem name="a" title="文和友">
      众多明星都光顾过的龙虾馆，餐厅位置极佳，靠近杜甫江阁，毗邻湘江，店内的装修更是耐人寻味，八仙桌、老旧长方凳、搪瓷杯，老长沙的气息扑面而来。共6层楼，每层楼都有不同的主题风格。
    </CollapseItem>
    <CollapseItem name="b" title="天宝兄弟">
      <div>
        在长沙龙虾界赫赫有名，永远都需要等位的店，在长沙要想吃高品质的小龙虾，一定要打卡天宝兄弟，在长沙已经开了五年多。
      </div>
    </CollapseItem>
    <CollapseItem name="c" title="聚味瞿记">
      <div>
        长沙虾届口味“扛把子”，聚味瞿记，2013年至今7年间，瞿记从夫妻店起家，凭着过硬的食材和出品，在长沙的龙虾舞台站稳脚跟。秘制虾是聚味瞿记的爆单王，来这几乎桌桌必点。
      </div>
    </CollapseItem>
    <CollapseItem name="d" title="虾小龙">
      <div>
        这是一家十多年的老店，有卡座也有大圆桌，主打是油爆小龙虾，还有很多其他菜品，像香辣蟹，口味墨鱼仔，口味嗦螺，各种肉串都很不错。
      </div>
    </CollapseItem>
  </Collapse>
</template>