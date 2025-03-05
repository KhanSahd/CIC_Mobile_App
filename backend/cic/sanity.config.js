import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {deskStructure} from './components/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'CIC',

  projectId: 'xoeequiy',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure}), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
