#!/bin/bash
 
date >> $HOME/.speedtest/speedtest.log
$HOME/.speedtest/speedtest.sh >> $HOME/.speedtest/speedtest.log
echo "" >> $HOME/.speedtest/speedtest.log
