from multiprocessing import Process, Queue
import time
import random

index = 0

def write_data(queue):
    while(True):
        global index
        index += 1
        value = index
        print 'Put %s to queue...' % value
        queue.put(value)
        time.sleep(random.random()*10)

def read_data(queue):
    while True:
        value = queue.get(True)
        print 'Get %s from  queue.' % value


if __name__ == '__main__':
    share_queue = Queue()
    process_write = Process(target=write_data, args=(share_queue,))
    process_read = Process(target=read_data, args=(share_queue,))
    process_write.start()
    process_read.start()
    process_write.join()
    process_read.join()
