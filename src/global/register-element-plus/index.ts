import { App } from 'vue'
import "element-plus/dist/index.css"

import { 
  ElButton,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
} from "element-plus/lib/components"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
]

export default function (app:App){
  for (const component of components) {
    app.component(component.name,component)
  }
}
