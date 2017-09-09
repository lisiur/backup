from multiprocessing import Pool, cpu_count, Queue, Process
import time, random

def f(q):
  data = 0
  while True:
    data += 1 
    q.put(data)
    print('put', data)
    time.sleep(.2)

def g(q):
  data = 0
  while True:
    try:
      data = q.get_nowait()
    except :
      pass
    finally:
      pass
    print('get', data)
    time.sleep(.1)

if __name__ == '__main__':
  q = Queue()
  pf = Process(target=f, args=(q,))
  pg = Process(target=g, args=(q,))
  pf.start()
  pg.start()
  pf.join()
  pg.join()