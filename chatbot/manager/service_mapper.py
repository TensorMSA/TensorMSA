from chatbot.common.chat_share_data import ShareData

class ServiceMapper(ShareData):

    def __init__(self, cb_id, entity_uuid_list, intent_uuid_list):
        self.cb_id = cb_id
        self.entity_uuid_list = entity_uuid_list
        self.intent_uuid_list = intent_uuid_list

    def run(self, share_data):
        story_slot = share_data.get_story_slot_entity()
        self._replace_intent_uuid(share_data)
        self._replace_entity_uuid(story_slot)
        return share_data

    def _replace_intent_uuid(self, share_data):
        intent_uuid = list(filter(lambda x: x["pk"] == str(share_data.get_intent_id()), self.intent_uuid_list))
        if (intent_uuid == []):
            pass
        else:
            share_data.set_intent_id(intent_uuid[0]['fields']['intent_uuid'])

    def _replace_entity_uuid(self, story_slot):
        slot_key_list = list(story_slot.keys())
        for key in slot_key_list:
            entity_uuid = list(filter(lambda x: x["fields"]["entity_id"] == key, self.entity_uuid_list))
            story_slot[entity_uuid[0]['fields']['entity_uuid']] = story_slot.pop(key)