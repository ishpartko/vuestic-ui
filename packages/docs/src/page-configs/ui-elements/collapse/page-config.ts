import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import VaCollapse from 'vuestic-ui/src/components/va-collapse/VaCollapse.vue'
import apiOptions from './api-options'
import table from '../../../prebuild/.tmp/va-collapse'

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('collapse.title'),

  block.paragraph('collapse.summaryText'),

  block.subtitle('all.examples'),

  // examples
  ...block.exampleBlock(
    'collapse.examples.default.title',
    'collapse.examples.default.text',
    'Default',
  ),

  ...block.exampleBlock(
    'collapse.examples.solid.title',
    'collapse.examples.solid.text',
    'Solid',
  ),

  ...block.exampleBlock(
    'collapse.examples.icon.title',
    'collapse.examples.icon.text',
    'Icon',
  ),

  ...block.exampleBlock(
    'collapse.examples.color.title',
    'collapse.examples.color.text',
    'Color',
  ),

  block.api(VaCollapse, apiOptions),
]

if (table) {
  config.push(block.table(table.columns, table.tableData))
}

export default config
