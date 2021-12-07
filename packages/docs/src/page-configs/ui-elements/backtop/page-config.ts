import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import VaBacktop from 'vuestic-ui/src/components/va-backtop/VaBacktop.vue'
import apiOptions from './api-options'
import table from '../../../prebuild/.tmp/va-backtop'

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('backtop.title'),
  block.paragraph('backtop.summaryText'),

  block.subtitle('all.examples'),
  ...block.exampleBlock(
    'backtop.examples.default.title',
    'backtop.examples.default.text',
    'Default',
  ),

  block.subtitle('all.api'),
  block.api(VaBacktop, apiOptions),
]

if (table) {
  config.push(block.table(table.columns, table.tableData))
}

export default config
