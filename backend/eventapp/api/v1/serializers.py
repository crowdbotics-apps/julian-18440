from rest_framework import serializers
from eventapp.models import Events


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"