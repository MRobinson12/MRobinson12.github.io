# Change the systemd unit file
#    1.Opens Tickets and shuts down if a disk has restarted more than once
#        Do nothing if restarts once
#    2.Opens a Ticket if it goes down (stopped)
#/etc/noquattor - Stops Aquilon changing settings
#/usr/lib/systemd/system/

# Finds how many times OSDs have stopped
cat /var/log/ceph/ceph-mon.$(hostname -s).log | grep -i "forcing failure" | awk '{ print $NF }' | sort | uniq -c

#1.
    #On crash should first find out how many times the disk has gone crashed recently
    cat /var/log/ceph/ceph-mon.$(hostname -s).log | grep -i "forcing failure" | awk '{ print $NF }' | sort | uniq -c
    # This will need to be written for the older logs
    # Should also provide a variable of the count
    #IF = Restart Count = 1
        # Shutdown and ticket
        systemctl stop ceph-osd@{osdID}
        #Provide the infomation of the OSD in the ticket
        /jamesf/osd_report_alltypes {osdID}

    #IF = Restart Count = 0
        # Restart Normally
#2. 
    #On a disk going down
    #Open a Ticket
    #Provide the infomation of the OSD
    /jamesf/osd_report_alltypes {osdID}

#Ideas - Seperate Script for reporting an OSD going down
