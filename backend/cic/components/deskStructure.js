export const deskStructure = (S, context) => {
  return S.list()
    .title('CIC Mobile App')
    .items([
      S.listItem().title('Home').child(S.editor().schemaType('home').documentId('home')),
      S.divider(),

      ...S.documentTypeListItems().filter((listItem) => !['home'].includes(listItem.getId())),
    ])
}
