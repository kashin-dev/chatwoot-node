const fs = require('fs')
const ChatwootClient = require('../dist').default
const config = {host: 'https://crm.kashin.app', apiAccessToken: 'xeV3twAajySL5Sw31EEbYBvw'}
const Chatwoot = new ChatwootClient({config})

const findOne = async (accountId, v) => {
  const {data} = await Chatwoot.contacts(accountId).search(v, 1, "email")
  return data
}

const createContact = async (accountId, c) => {
  const {data} = await Chatwoot.contacts(accountId).create(c)
}

const updateContact = async (accountId, cid, c) => {
  const {data} = await Chatwoot.contacts(accountId).update(cid, c)
}

fs.readFile('/Users/tex/Downloads/up.csv', 'utf8', async function (err, data) {
  let dataArray = data.split(/\r?\n/);
  for (const element of dataArray.slice(1)) {
    let r = element.split(',')
    let email = r[0]
    let sex = r[1]
    let city = r[2]
    let docType = r[3]
    let identifier = r[4]
    let titular = r[5]
    let documentNumber = r[6]
    let phoneNumber = r[7]
    let name = r[8]

    //console.log(JSON.stringify({
    //identifier,
    //name,
    //email,
    //phoneNumber,
    //inbox_id: 0,
    //custom_attributes: {
    //sex,
    //city,
    //docType,
    //documentNumber,
    //titular
    //}
    //}))

    const {meta, payload} = await findOne(1, phoneNumber)
    if (meta.count > 0) {
      const id = payload[0].id
      try {
        await updateContact(1, id, {phone_number: phoneNumber})
        console.log(`sucess update: ${identifier}`)
      } catch (e) {
        console.log(`failed update: ${identifier}`)
      }
    } else {
      try {
        await createContact(1, {
          identifier,
          name,
          email,
          phone_number: phoneNumber,
          city,
          custom_attributes: {
            sex,
            docType,
            documentNumber,
            titular
          }
        })
        console.log(`successful creation: ${identifier}`)
      } catch (e) {
        console.log(`failed creation: ${identifier}`)
      }
    }
  }
})
