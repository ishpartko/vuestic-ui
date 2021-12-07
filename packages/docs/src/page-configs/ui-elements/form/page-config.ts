import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import VaForm from 'vuestic-ui/src/components/va-form/VaForm.vue'
import apiOptions from './api-options'
import { makeTableFromComponent } from '@/helpers/makeTableFromComponent'
const cssVariablesAsTable = makeTableFromComponent('va-form')

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('form.title'),
  block.paragraph('form.summaryText'),

  block.subtitle('all.examples'),

  ...block.exampleBlock(
    'form.examples.default.title',
    'form.examples.default.text',
    'Default',
  ),
  ...block.exampleBlock(
    'form.examples.advanced.title',
    'form.examples.advanced.text',
    'WithInputs',
  ),

  block.subtitle('all.api'),
  block.api(VaForm, apiOptions),
]

if (cssVariablesAsTable) {
  config.push(block.table(cssVariablesAsTable.columns, cssVariablesAsTable.tableData))
}

export default config
