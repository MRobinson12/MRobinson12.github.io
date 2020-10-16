#1. Change the systemd unit file
#    Opens Tickets and shuts down if a disk has restarted more than once
#        Do nothing if restarts once
#    Opens a Ticket if it goes down (stopped)
#/etc/noquattor - Stops Aquilon changing settings
#/usr/lib/systemd/system/

cat /var/log/ceph/ceph-mon.$(hostname -s).log | grep -i "forcing failure" | awk '{ print $NF }' | sort | uniq -c
