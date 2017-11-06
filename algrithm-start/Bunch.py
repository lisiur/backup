class Bunch(dict):
    def __init__(self, *args, **kws):
        super(Bunch, self).__init__(*args, **kws)
        self.__dict__ = self
