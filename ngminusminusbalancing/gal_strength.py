import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import math

# Data for plotting
t = np.arange(1.0, 10.0, 0.01)
s = [math.log(1e6) / -math.log(.9 - .02 * i) for i in t]

# Note that using plt.subplots below is equivalent to using
# fig = plt.figure() and then ax = fig.add_subplot(111)
fig, ax = plt.subplots()
ax.plot(t, s)

ax.set(xlabel='galaxy strength (with > 3 gal formula)', ylabel='tickspeed upgrades',
       title='plot')
ax.grid()

fig.savefig("test3.png")

# We want it to take 77 tickspeed upgrades.

print((.9 - 1 / (1e6 ** (1 / 77))) / .02)

exit()
